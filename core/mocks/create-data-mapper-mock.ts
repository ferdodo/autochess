import type { Game } from "../types/game.js";
import type { Queuer } from "../types/queuer.js";
import { Subject, filter, map } from "rxjs";
import type { DataMapper } from "../types/data-mapper.js";
import type { Pool } from "../types/pool.js";
import type { PublicKey } from "../types/public-key.js";
import type { Ranking } from "../types/ranking.js";
import type { Encounter } from "../types/encounter.js";
import { cloneGame } from "../utils/clone-game.js";
import type { Metrics } from "../types/metrics.js";

export function createDataMapperMock(metrics: Metrics): DataMapper {
	let games: Game[] = [];
	const game$ = new Subject<Game>();
	const createdGames$ = new Subject<Game>();
	const currentQueuer$ = new Subject<Queuer[]>();
	let pools: Pool[] = [];
	let queuers: Queuer[] = [];
	let rankings: Ranking[] = [];
	const encounters: Encounter[] = [];

	async function readGame(playsig: string) {
		const game = games.find((game) => game.playsig === playsig);

		if (!game) {
			return undefined;
		}

		return cloneGame(game);
	}

	async function updateGame(game: Game) {
		const index = games.findIndex((g) => g.playsig === game.playsig);

		if (index === -1) {
			return false;
		}

		games = games.map((g) => (g.playsig === game.playsig ? game : g));
		game$.next(game);
		return true;
	}

	return {
		readGame,
		async readAndUpdateGame(playsig: string) {
			const game = games.find((game) => game.playsig === playsig);

			if (!game) {
				return;
			}

			metrics.transactionBeginCount++;

			return {
				game: cloneGame(game),
				commit: async (game: Game) => {
					metrics.transactionEndCount++;
					return await updateGame(cloneGame(game));
				},
				async abort() {
					metrics.transactionEndCount++;
					return;
				},
			};
		},
		updateGame,
		async createGameWithPoolAndDeleteQueuers(
			game: Game,
			pool: Pool,
			queuersPublicKeys: string[],
		) {
			for (const publicKey of game.publicKeys) {
				if (!queuersPublicKeys.includes(publicKey)) {
					return false;
				}
			}

			if (games.find((g) => g.playsig === game.playsig)) {
				return false;
			}

			queuers = queuers.filter((q) => !queuersPublicKeys.includes(q.publicKey));
			pools.push(pool);
			games.push(game);
			game$.next(game);
			createdGames$.next(game);
			currentQueuer$.next(queuers);
			return true;
		},
		createdGame$: createdGames$.pipe(map((game) => cloneGame(game))),
		observeGame(playsig: string) {
			return game$.pipe(
				filter((game) => game.playsig === playsig),
				map((game) => cloneGame(game)),
			);
		},
		async readPool(playsig: string) {
			return pools.find((p) => p.playsig === playsig);
		},
		async createPool(pool: Pool) {
			const alreadyExists = pools.some((p) => p.playsig === pool.playsig);

			if (alreadyExists) {
				return false;
			}

			pools.push(pool);

			return true;
		},
		async readAndUpdatePoolWithGame(playsig: string) {
			const pool = pools.find((p) => p.playsig === playsig);
			const game = await readGame(playsig);

			if (!game || !pool) {
				return;
			}

			metrics.transactionBeginCount++;

			return {
				game,
				pool,
				commit: async (pool: Pool, game: Game) => {
					const saved = await updateGame(game);

					if (!saved) {
						metrics.transactionEndCount++;
						return false;
					}

					pools = pools.map((p) => (p.playsig === pool.playsig ? pool : p));
					metrics.transactionEndCount++;
					return true;
				},
				async abort() {
					metrics.transactionEndCount++;
					return;
				},
			};
		},
		async readQueuers() {
			return structuredClone(queuers);
		},
		async createQueuer(queuer: Queuer) {
			const index = queuers.findIndex((q) => q.publicKey === queuer.publicKey);

			if (index !== -1) {
				return false;
			}

			queuers.push(queuer);
			currentQueuer$.next(queuers);
			return true;
		},
		async deleteQueuer(publicKey: PublicKey) {
			const index = queuers.findIndex((q) => q.publicKey === publicKey);

			if (index === -1) {
				return false;
			}

			queuers = queuers.filter((q) => q.publicKey !== publicKey);
			currentQueuer$.next(queuers);
			return true;
		},
		queuers$: currentQueuer$.pipe(map((queuers) => structuredClone(queuers))),
		async readAndUpsertRankingsAndCreateEncounters(
			playersPublicKeys: PublicKey[],
		) {
			metrics.transactionBeginCount++;
			return {
				rankings: structuredClone(
					rankings.filter((ranking) =>
						playersPublicKeys.includes(ranking.publicKey),
					),
				),
				async commit(newEncounters: Encounter[], newRankings: Ranking[]) {
					if (
						newEncounters.some((encounter) =>
							encounters.some(
								(e) =>
									e.playsig === encounter.playsig &&
									e.winnerPublicKey === encounter.winnerPublicKey &&
									e.loserPublicKey === encounter.loserPublicKey,
							),
						)
					) {
						metrics.transactionEndCount++;
						return false;
					}

					encounters.push(...newEncounters);

					rankings = rankings.filter(
						(elo) =>
							!newRankings.some((newElo) => newElo.publicKey === elo.publicKey),
					);

					rankings.push(...newRankings);

					metrics.transactionEndCount++;
					return true;
				},
				async abort() {
					metrics.transactionEndCount++;
					return;
				},
			};
		},
		async readRanking(publicKey: PublicKey): Promise<Ranking> {
			const ranking = rankings.find(
				(ranking) => ranking.publicKey === publicKey,
			);

			if (!ranking) {
				return {
					publicKey,
					elo: 1000,
				};
			}

			return structuredClone(ranking);
		},
	};
}
