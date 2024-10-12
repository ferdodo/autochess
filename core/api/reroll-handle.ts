import type { Subscription } from "rxjs";
import { map, mergeMap, filter, tap } from "rxjs/operators";
import type { BackContext } from "../types/back-context";
import { checkInvalidSignature } from "../utils/check-invalid-signature";
import { checkTimestamp } from "../utils/check-timestamp";
import { uid } from "uid";
import type { Pool } from "../types/pool";
import { checkGameHasPlayer } from "../utils/check-game-has-player";

export function rerollHandle({
	connections$,
	poolDataMapper,
	gameDataMapper,
	isValidSignature,
}: BackContext): Subscription {
	return connections$
		.pipe(
			mergeMap((connection) =>
				connection.messages$.pipe(
					map((message) => message.rerollRequest),
					filter(Boolean),
					checkInvalidSignature(isValidSignature),
					checkTimestamp(),
					checkGameHasPlayer(gameDataMapper),
					tap(async ({ publicKey, playsig }) => {
						const transaction =
							await poolDataMapper.readAndUpdateWithGame(playsig);

						if (!transaction) {
							return;
						}

						const { game, pool, commit, abort } = transaction;

						try {
							if (game.playerMoney[publicKey] < 2) {
								await abort();
								return;
							}

							const newPool: Pool = {
								heroes: [...pool.heroes],
								playsig: pool.playsig,
							};

							const threeFirstHeroesOfPool = newPool.heroes.slice(0, 3);
							newPool.heroes = newPool.heroes.slice(3) as Pool["heroes"];

							for (const product of game.playerShops[publicKey]) {
								newPool.heroes.push(product.appellation);
							}

							const newGame = {
								...game,
								playerShops: {
									...game.playerShops,
									[publicKey]: threeFirstHeroesOfPool.map((appellation) => ({
										id: uid(),
										appellation,
									})),
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
