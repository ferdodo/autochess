import type { Observable } from "rxjs";
import { map, mergeMap, filter } from "rxjs/operators";
import type { BackContext } from "../types/back-context.js";
import { checkSignature } from "../utils/check-signature.js";
import { checkStamp } from "../utils/check-stamp.js";
import type { Hero } from "../types/hero.js";
import { isTranspositionLegal } from "../utils/is-transposition-legal.js";
import { getDate } from "../utils/get-date.js";
import { ServerNotification } from "../types/server-notifications.js";
import { Phase } from "../types/phase.js";

export function transposeHandle(context: BackContext): Observable<void> {
	const {
		connections$,
		dataMapper: { readAndUpdateGame },
		isValidSignature,
		metrics,
	} = context;

	return connections$.pipe(
		mergeMap((connection) =>
			connection.messages$.pipe(
				map((message) => message.transposeRequest),
				filter(Boolean),
				checkSignature(isValidSignature),
				checkStamp(context),
				mergeMap(async (transposeRequest) => {
					metrics.transposeRequestCount++;

					if (!isTranspositionLegal(transposeRequest)) {
						connection.send({
							serverNotification:
								ServerNotification.InvalidTranspositionPosition,
						});

						return;
					}

					const { publicKey, grabPiece, ungrabPiece, playsig } =
						transposeRequest;

					const readStartTime = getDate(context);

					const transaction = await readAndUpdateGame(playsig);

					if (!transaction) {
						return;
					}

					const { game, commit, abort } = transaction;

					try {
						const readEndTime = getDate(context);

						if (readEndTime.getTime() - readStartTime.getTime() > 100) {
							await abort();
							return;
						}

						if (
							(grabPiece.positionX !== undefined ||
								grabPiece.positionY !== undefined ||
								ungrabPiece.positionX !== undefined ||
								ungrabPiece.positionY !== undefined) &&
							game.phase === Phase.Combat
						) {
							connection.send({
								serverNotification:
									ServerNotification.TranspositionNotAllowedInCombat,
							});

							await abort();
							return;
						}

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

							if (
								game.playerHeroes[publicKey].length >
								game.playerLevel[publicKey]
							) {
								await abort();
								return;
							}

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
				map(() => {
					metrics.transposeDoneCount++;
				}),
			),
		),
	);
}
