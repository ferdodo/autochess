import type { Subscription } from "rxjs";
import { map, mergeMap, filter, tap } from "rxjs/operators";
import type { BackContext } from "../types/back-context";
import { checkInvalidSignature } from "../utils/check-invalid-signature";
import type { Pool } from "../types/pool";
import { checkGameHasPlayer } from "../utils/check-game-has-player";
import { getRerollCost } from "../utils/get-reroll-cost";

export function rerollHandle({
	connections$,
	dataMapper,
	isValidSignature,
}: BackContext): Subscription {
	return connections$
		.pipe(
			mergeMap((connection) =>
				connection.messages$.pipe(
					map((message) => message.rerollRequest),
					filter(Boolean),
					checkInvalidSignature(isValidSignature),
					checkGameHasPlayer(dataMapper),
					tap(async ({ publicKey, playsig }) => {
						const transaction =
							await dataMapper.readAndUpdatePoolWithGame(playsig);

						if (!transaction) {
							return;
						}

						const { game, pool, commit, abort } = transaction;

						try {
							if (game.playerMoney[publicKey] < getRerollCost()) {
								await abort();
								return;
							}

							const newPool: Pool = {
								heroes: [...pool.heroes],
								playsig: pool.playsig,
							};

							const threeFirstHeroesOfPool = newPool.heroes.slice(0, 3);
							newPool.heroes = newPool.heroes.slice(3) as Pool["heroes"];

							for (const appellation of game.playerShops[publicKey]) {
								newPool.heroes.push(appellation);
							}

							const newGame = {
								...game,
								playerShops: {
									...game.playerShops,
									[publicKey]: threeFirstHeroesOfPool,
								},
								playerMoney: {
									...game.playerMoney,
									[publicKey]: game.playerMoney[publicKey] - getRerollCost(),
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
