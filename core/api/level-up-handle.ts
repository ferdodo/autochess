import type { Observable } from "rxjs";
import { map, mergeMap, filter } from "rxjs/operators";
import type { BackContext } from "../types/back-context.js";
import { checkSignature } from "../utils/check-signature.js";
import { checkStamp } from "../utils/check-stamp.js";
import { getLevelUpCost } from "../utils/get-level-up-cost.js";
import { levelSchema, type Level } from "../types/level.js";
import { ServerNotification } from "../types/server-notifications.js";

export function levelUpHandle(context: BackContext): Observable<void> {
	const {
		connections$,
		dataMapper: { readAndUpdateGame },
		isValidSignature,
	} = context;

	return connections$.pipe(
		mergeMap((connection) =>
			connection.messages$.pipe(
				map((message) => message.levelUpRequest),
				filter(Boolean),
				checkSignature(isValidSignature),
				checkStamp(context),
				mergeMap(async ({ publicKey, playsig }) => {
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
							connection.send({
								serverNotification: ServerNotification.InvalidLevelUp,
							});

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
	);
}
