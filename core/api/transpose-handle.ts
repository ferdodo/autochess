import type { Subscription } from "rxjs";
import { map, mergeMap, filter, tap } from "rxjs/operators";
import type { BackContext } from "../types/back-context";
import { checkInvalidSignature } from "../utils/check-invalid-signature";
import { checkGameHasPlayer } from "../utils/check-game-has-player";
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
					checkInvalidSignature(isValidSignature),
					checkGameHasPlayer(context),
					tap(async ({ publicKey, playsig, grabPiece, ungrabPiece }) => {
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

							const benchHeroes = game.playerBenches[publicKey];

							if (!benchHeroes) {
								throw new Error("Player does not have bench heroes !");
							}

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
								grabPiece.positionX &&
								grabPiece.positionY &&
								ungrabPiece.positionX &&
								ungrabPiece.positionY
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
								grabPiece.positionX &&
								grabPiece.positionY &&
								ungrabPiece.benchPosition
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
								grabPiece.benchPosition &&
								ungrabPiece.positionX &&
								ungrabPiece.positionY
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

							if (grabPiece.benchPosition && ungrabPiece.benchPosition) {
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
