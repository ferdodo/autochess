import type { BackContext } from "../types/back-context.js";
import type { Observable } from "rxjs";
import { mergeMap, filter, merge, from } from "rxjs";
import { Phase } from "../types/phase.js";
import { computeCombatLoser } from "../utils/compute-combat-loser.js";
import { getDate } from "../utils/get-date.js";
import { swapPlayerShopWithPool } from "../utils/swap-player-shop-with-pool.js";

export function setPlanningPhase(backContext: BackContext): Observable<void> {
	return backContext.dataMapper.createdGame$.pipe(
		mergeMap((game) =>
			merge(
				backContext.dataMapper.observeGame(game.playsig),
				from(backContext.dataMapper.readGame(game.playsig)),
			).pipe(filter(Boolean), backContext.roundTimer),
		),
		mergeMap(async ({ playsig }) => {
			const transaction =
				await backContext.dataMapper.readAndUpdatePoolWithGame(playsig);

			if (!transaction) {
				return;
			}

			const { game, pool, commit, abort } = transaction;

			try {
				if (
					game.phase !== Phase.Combat ||
					new Date(game.phaseStartAt) > getDate(backContext, -10000)
				) {
					await abort();
					return;
				}

				if (game.combats) {
					const date = new Date().toISOString();

					for (const combat of game.combats) {
						const loser = computeCombatLoser(combat);
						game.playerHealths[loser] -= 1;

						if (game.playerHealths[loser] <= 0) {
							game.playerLostAt[loser] = date;
						}
					}
				}

				game.phase = Phase.Planning;
				game.phaseStartAt = getDate(backContext).toISOString();
				game.previousCombats = game.combats;
				game.combats = undefined;

				game.playerMoney = Object.fromEntries(
					Object.entries(game.playerMoney).map(([key, value]) => [
						key,
						value + 1,
					]),
				);

				let newGame = game;
				let newPool = pool;

				for (const publicKey of Object.keys(game.playerShops)) {
					[newGame, newPool] = swapPlayerShopWithPool(
						publicKey,
						newGame,
						newPool,
					);
				}

				await commit(newPool, newGame);
			} catch (error) {
				console.error(error);
				await abort();
			}
		}),
	);
}
