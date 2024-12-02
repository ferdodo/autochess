import type { Subscription } from "rxjs";
import { map, mergeMap, filter, tap } from "rxjs/operators";
import type { BackContext } from "../types/back-context";
import { checkSignature } from "../utils/check-signature";
import { checkStamp } from "../utils/check-stamp";
import type { Hero } from "../types/hero";

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
					tap(async ({ publicKey, grabPiece, ungrabPiece, playsig }) => {
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

							const benchHeroes = game.playerBenches[publicKey] || [];

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

								benchHeroes[ungrabPiece.benchPosition] = grabbedHero;
								heroes.splice(heroes.indexOf(grabbedHero), 1);
								await commit(game);
								return;
							}

							if (
								grabPiece.benchPosition !== undefined &&
								ungrabPiece.positionX !== undefined &&
								ungrabPiece.positionY !== undefined
							) {
								heroes.push(grabbedHero);

								if (ungrabbedHero) {
									benchHeroes[grabPiece.benchPosition] = ungrabbedHero;
								} else {
									delete benchHeroes[grabPiece.benchPosition];
								}

								await commit(game);
								return;
							}

							if (
								grabPiece.benchPosition !== undefined &&
								ungrabPiece.benchPosition !== undefined
							) {
								benchHeroes[ungrabPiece.benchPosition] = grabbedHero;

								if (ungrabbedHero) {
									benchHeroes[grabPiece.benchPosition] = ungrabbedHero;
								} else {
									delete benchHeroes[grabPiece.benchPosition];
								}

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
