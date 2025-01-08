import type { BackContext } from "../types/back-context.js";
import type { Subscription } from "rxjs";
import { tap, mergeMap, filter, merge, from } from "rxjs";
import { Phase } from "../types/phase.js";
import { computeCombatLoser } from "../utils/compute-combat-loser.js";

export function setPlanningPhase(backContext: BackContext): Subscription {
	return backContext.dataMapper.createdGame$
		.pipe(
			mergeMap((game) =>
				merge(
					backContext.dataMapper.observeGame(game.playsig),
					from(backContext.dataMapper.readGame(game.playsig)),
				).pipe(
					filter(Boolean),
					backContext.roundTimer,
					filter((game) => game.phase === Phase.Combat),
				),
			),
			tap(async ({ playsig }) => {
				const transaction =
					await backContext.dataMapper.readAndUpdateGame(playsig);

				if (!transaction) {
					return;
				}

				const { game, commit, abort } = transaction;

				try {
					if (game.phase !== Phase.Combat) {
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
					game.phaseStartAt = new Date().toISOString();
					game.combats = undefined;

					game.playerMoney = Object.fromEntries(
						Object.entries(game.playerMoney).map(([key, value]) => [
							key,
							value + 1,
						]),
					);

					await commit(game);
				} catch (error) {
					console.error(error);
					await abort();
				}
			}),
		)
		.subscribe();
}
