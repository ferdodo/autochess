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
						for (const combat of game.combats) {
							game.playerHealths[computeCombatLoser(combat)] -= 1;
						}
					}

					game.phase = Phase.Planning;
					game.phaseStartAt = new Date().toISOString();
					game.combats = undefined;
					await commit(game);
				} catch (error) {
					console.error(error);
					await abort();
				}
			}),
		)
		.subscribe();
}
