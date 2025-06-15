import type { Observable } from "rxjs";
import { mergeMap, filter, merge, from } from "rxjs";
import type { BackContext } from "../types/BackContext.js";
import { Phase } from "../types/Phase.js";
import { getDate } from "../utils/getDate.js";
import { generateCombats } from "../utils/generateCombats.js";

export function setCombatPhase(backContext: BackContext): Observable<void> {
	return backContext.dataMapper.createdGame$.pipe(
		mergeMap((game) =>
			merge(
				backContext.dataMapper.observeGame(game.playsig),
				from(backContext.dataMapper.readGame(game.playsig)),
			).pipe(filter(Boolean), backContext.roundTimer),
		),
		mergeMap(async ({ playsig }) => {
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
	);
}
