import type { Subscription } from "rxjs";
import { map, mergeMap, filter, tap } from "rxjs/operators";
import type { BackContext } from "../types/back-context";
import { checkInvalidSignature } from "../utils/check-invalid-signature";
import { checkGameHasPlayer } from "../utils/check-game-has-player";
import { getLevelUpCost } from "../utils/get-level-up-cost";
import type { Level } from "../types/level";

export function levelUpHandle({
	connections$,
	dataMapper,
	isValidSignature,
}: BackContext): Subscription {
	return connections$
		.pipe(
			mergeMap((connection) =>
				connection.messages$.pipe(
					map((message) => message.levelUpRequest),
					filter(Boolean),
					checkInvalidSignature(isValidSignature),
					checkGameHasPlayer(dataMapper),
					tap(async ({ publicKey, playsig }) => {
						const transaction = await dataMapper.readAndUpdateGame(playsig);

						if (!transaction) {
							return;
						}

						const { game, commit, abort } = transaction;
						const cost = getLevelUpCost(game, publicKey);

						try {
							if (
								game.playerMoney[publicKey] < cost ||
								game.playerLevel[publicKey] >= 10
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
