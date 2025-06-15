import type { Observable } from "rxjs";
import { filter, mergeMap, merge, from, take } from "rxjs";
import type { BackContext } from "../types/BackContext.js";
import { isGameInProgress } from "../utils/isGameInProgress.js";
import type { Encounter } from "../types/Encounter.js";
import { computeEncounter } from "../utils/computeEncounter.js";
import type { PublicKey } from "../types/PublicKey.js";
import type { Ranking } from "../types/Ranking.js";
import { randomizeArray } from "../utils/randomizeArray.js";
import { calculateElo } from "../utils/calculateElo.js";

export function concludeGame(backContext: BackContext): Observable<void> {
	return backContext.dataMapper.createdGame$.pipe(
		mergeMap((game) =>
			merge(
				backContext.dataMapper.observeGame(game.playsig),
				from(backContext.dataMapper.readGame(game.playsig)),
			).pipe(
				filter(Boolean),
				filter((g) => !isGameInProgress(g)),
				take(1),
			),
		),
		mergeMap(async (game) => {
			let encounters: Encounter[] = [];
			const processedEncounter = new Set();

			for (const player1PublicKey of game.publicKeys) {
				for (const player2PublicKey of game.publicKeys) {
					if (player1PublicKey === player2PublicKey) {
						continue;
					}

					const key = [player1PublicKey, player2PublicKey].sort().join();

					if (processedEncounter.has(key)) {
						continue;
					}

					processedEncounter.add(key);

					encounters.push(
						computeEncounter(game, player1PublicKey, player2PublicKey),
					);
				}
			}

			const transaction =
				await backContext.dataMapper.readAndUpsertRankingsAndCreateEncounters(
					game.publicKeys,
				);

			if (!transaction) {
				return;
			}

			const { rankings, commit, abort } = transaction;

			try {
				const newRankingsByPlayer: Record<PublicKey, Ranking> =
					Object.fromEntries(
						rankings.map((ranking) => [ranking.publicKey, ranking]),
					);

				encounters = randomizeArray(encounters);

				for (const encounter of encounters) {
					newRankingsByPlayer[encounter.winnerPublicKey] ||= {
						publicKey: encounter.winnerPublicKey,
						elo: 1000,
					};

					newRankingsByPlayer[encounter.loserPublicKey] ||= {
						publicKey: encounter.loserPublicKey,
						elo: 1000,
					};

					newRankingsByPlayer[encounter.winnerPublicKey].elo = calculateElo(
						newRankingsByPlayer[encounter.winnerPublicKey].elo,
						newRankingsByPlayer[encounter.loserPublicKey].elo,
						true,
					);

					newRankingsByPlayer[encounter.loserPublicKey].elo = calculateElo(
						newRankingsByPlayer[encounter.loserPublicKey].elo,
						newRankingsByPlayer[encounter.winnerPublicKey].elo,
						false,
					);
				}

				const newRankings = Object.values(newRankingsByPlayer);
				await commit(encounters, newRankings);
			} catch (e) {
				console.error(e);
				await abort();
			}
		}),
	);
}
