import type { BackContext } from "../types/back-context";
import type { Subscription } from "rxjs";
import { tap, mergeMap, filter, merge, from } from "rxjs";
import { Phase } from "../types/phase";

export function setCombatPhase(backContext: BackContext): Subscription {
	return backContext.dataMapper
		.observeCreatedGame()
		.pipe(
			mergeMap((game) =>
				merge(
					backContext.dataMapper.observeGame(game.playsig),
					from(backContext.dataMapper.readGame(game.playsig)),
				).pipe(
					filter(Boolean),
					filter((game) => game.phase === Phase.Planning),
					backContext.roundTimer,
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
					if (game.phase !== Phase.Planning) {
						await abort();
						return;
					}

					game.phase = Phase.Combat;
					await commit(game);
				} catch (error) {
					console.error(error);
					await abort();
				}
			}),
		)
		.subscribe();
}
