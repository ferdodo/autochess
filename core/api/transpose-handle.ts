import type { Subscription } from "rxjs";
import { map, mergeMap, filter, tap } from "rxjs/operators";
import type { BackContext } from "../types/back-context.js";
import { checkSignature } from "../utils/check-signature.js";
import { checkStamp } from "../utils/check-stamp.js";
import type { Hero } from "../types/hero.js";
import { isTranspositionLegal } from "../utils/is-transposition-legal.js";

export function transposeHandle(context: BackContext): Subscription {
	const {
		connections$,
		dataMapper: { readAndUpdateGame },
		isValidSignature,
	} = context;

	return connections$
		.pipe(
			mergeMap((connection) =>
				connection.messages$.pipe(
					map((message) => message.transposeRequest),
					filter(Boolean),
					checkSignature(isValidSignature),
					checkStamp(context),
					tap(async (transposeRequest) => {
						if (!isTranspositionLegal(transposeRequest)) {
							connection.send({
								serverNotification: "Invalid transposition position !",
							});

							return;
						}

						const { publicKey, grabPiece, ungrabPiece, playsig } =
							transposeRequest;

						const transaction = await readAndUpdateGame(playsig);

						if (!transaction) {
							return;
						}

						const { game, commit, abort } = transaction;

						try {
							const heroes = game.playerHeroes[publicKey];

							if (!heroes) {
								throw new Error("Player does not have heroes !");
							}

							const benchHeroes = game.playerBenches[publicKey] || {};

							const grabbedHero: Hero | undefined =
								heroes.find(
									(hero) =>
										hero.position.x === grabPiece.positionX &&
										hero.position.y === grabPiece.positionY,
								) || benchHeroes[grabPiece.benchPosition as number];

							const ungrabbedHero: Hero | undefined =
								heroes.find(
									(hero) =>
										hero.position.x === ungrabPiece.positionX &&
										hero.position.y === ungrabPiece.positionY,
								) || benchHeroes[ungrabPiece.benchPosition as number];

							if (!grabbedHero) {
								await abort();
								return;
							}

							if (
								grabPiece.positionX !== undefined &&
								grabPiece.positionY !== undefined &&
								ungrabPiece.positionX !== undefined &&
								ungrabPiece.positionY !== undefined
							) {
								if (ungrabbedHero) {
									const initialPos = grabbedHero.position;
									grabbedHero.position = ungrabbedHero.position;
									ungrabbedHero.position = initialPos;
								} else {
									grabbedHero.position = {
										x: ungrabPiece.positionX,
										y: ungrabPiece.positionY,
										w: 1,
										h: 1,
									};
								}

								await commit(game);
								return;
							}

							if (
								grabPiece.positionX !== undefined &&
								grabPiece.positionY !== undefined &&
								ungrabPiece.benchPosition !== undefined
							) {
								if (ungrabbedHero) {
									heroes.push(ungrabbedHero);
								}

								heroes.splice(heroes.indexOf(grabbedHero), 1);

								game.playerBenches[publicKey] = {
									...game.playerBenches[publicKey],
									[ungrabPiece.benchPosition]: grabbedHero,
								};

								await commit(game);
								return;
							}

							if (
								grabPiece.benchPosition !== undefined &&
								ungrabPiece.positionX !== undefined &&
								ungrabPiece.positionY !== undefined
							) {
								grabbedHero.position = {
									x: ungrabPiece.positionX,
									y: ungrabPiece.positionY,
									w: 1,
									h: 1,
								};

								if (ungrabbedHero) {
									game.playerHeroes[publicKey] = game.playerHeroes[
										publicKey
									].filter((hero) => hero.id !== ungrabbedHero.id);
								}

								game.playerHeroes[publicKey].push(grabbedHero);
								benchHeroes[grabPiece.benchPosition] = ungrabbedHero;
								await commit(game);
								return;
							}

							if (
								grabPiece.benchPosition !== undefined &&
								ungrabPiece.benchPosition !== undefined
							) {
								benchHeroes[ungrabPiece.benchPosition] = grabbedHero;
								benchHeroes[grabPiece.benchPosition] = ungrabbedHero;
								await commit(game);
								return;
							}

							await abort();
						} catch (error) {
							await abort();
							throw error;
						}
					}),
				),
			),
		)
		.subscribe();
}
