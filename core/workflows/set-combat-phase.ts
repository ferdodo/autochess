import type { BackContext } from "../types/back-context.js";
import type { Subscription } from "rxjs";
import { tap, mergeMap, filter, merge, from } from "rxjs";
import { Phase } from "../types/phase.js";
import { generateCombats } from "../utils/generate-combats.js";
import { getDate } from "../utils/get-date.js";

export function setCombatPhase(backContext: BackContext): Subscription {
	return backContext.dataMapper.createdGame$
		.pipe(
			mergeMap((game) =>
				merge(
					backContext.dataMapper.observeGame(game.playsig),
					from(backContext.dataMapper.readGame(game.playsig)),
				).pipe(filter(Boolean), backContext.roundTimer),
			),
			tap(async ({ playsig }) => {
				const transaction =
					await backContext.dataMapper.readAndUpdateGame(playsig);

				if (!transaction) {
					return;
				}

				const { game, commit, abort } = transaction;

				try {
					if (
						game.phase !== Phase.Planning ||
						new Date(game.phaseStartAt) > getDate(backContext, -10000)
					) {
						await abort();
						return;
					}

					game.phase = Phase.Combat;
					game.phaseStartAt = getDate(backContext).toISOString();
					game.combats = await generateCombats(game);
					await commit(game);
				} catch (error) {
					console.error(error);
					await abort();
				}
			}),
		)
		.subscribe();
}
