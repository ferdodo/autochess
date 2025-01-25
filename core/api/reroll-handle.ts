import type { Subscription } from "rxjs";
import { map, mergeMap, filter, tap } from "rxjs/operators";
import type { BackContext } from "../types/back-context.js";
import { checkSignature } from "../utils/check-signature.js";
import type { Pool } from "../types/pool.js";
import { checkStamp } from "../utils/check-stamp.js";
import { getRerollCost } from "../utils/get-reroll-cost.js";
import { swapPlayerShopWithPool } from "../utils/swap-player-shop-with-pool.js";

export function rerollHandle(context: BackContext): Subscription {
	const {
		connections$,
		dataMapper: { readAndUpdatePoolWithGame },
		isValidSignature,
	} = context;

	return connections$
		.pipe(
			mergeMap((connection) =>
				connection.messages$.pipe(
					map((message) => message.rerollRequest),
					filter(Boolean),
					checkSignature(isValidSignature),
					checkStamp(context),
					tap(async ({ publicKey, playsig }) => {
						const transaction = await readAndUpdatePoolWithGame(playsig);

						if (!transaction) {
							return;
						}

						const { game, pool, commit, abort } = transaction;

						try {
							if (game.playerMoney[publicKey] < getRerollCost()) {
								await abort();
								return;
							}

							let [newGame, newPool] = swapPlayerShopWithPool(
								publicKey,
								game,
								pool,
							);

							newGame = {
								...newGame,
								playerMoney: {
									...game.playerMoney,
									[publicKey]: newGame.playerMoney[publicKey] - getRerollCost(),
								},
							};

							await commit(newPool, newGame);
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
