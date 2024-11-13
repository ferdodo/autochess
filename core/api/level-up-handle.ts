import type { Subscription } from "rxjs";
import { map, mergeMap, filter, tap } from "rxjs/operators";
import type { BackContext } from "../types/back-context";
import { checkInvalidSignature } from "../utils/check-invalid-signature";
import { checkGameHasPlayer } from "../utils/check-game-has-player";
import { getLevelUpCost } from "../utils/get-level-up-cost";
import { levelSchema, type Level } from "../types/level";

export function levelUpHandle(context: BackContext): Subscription {
	const {
		connections$,
		dataMapper: { readAndUpdateGame },
		isValidSignature,
	} = context;

	return connections$
		.pipe(
			mergeMap((connection) =>
				connection.messages$.pipe(
					map((message) => message.levelUpRequest),
					filter(Boolean),
					checkInvalidSignature(isValidSignature),
					checkGameHasPlayer(context),
					tap(async ({ publicKey, playsig }) => {
						const transaction = await readAndUpdateGame(playsig);

						if (!transaction) {
							return;
						}

						const { game, commit, abort } = transaction;
						const cost = getLevelUpCost(game, publicKey);

						try {
							if (
								game.playerMoney[publicKey] < cost ||
								game.playerLevel[publicKey] >= levelSchema.maximum
							) {
								await abort();
								return;
							}

							const newGame = {
								...game,
								playerLevel: {
									...game.playerLevel,
									[publicKey]: (game.playerLevel[publicKey] + 1) as Level,
								},
								playerMoney: {
									...game.playerMoney,
									[publicKey]: game.playerMoney[publicKey] - cost,
								},
							};

							await commit(newGame);
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
