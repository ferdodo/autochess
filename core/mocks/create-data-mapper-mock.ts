import type { Game } from "../types/game";
import type { Queuer } from "../types/queuer";
import { Subject, filter, map } from "rxjs";
import type { DataMapper } from "../types/data-mapper";
import type { Pool } from "../types/pool";

export function createDataMapperMock(): DataMapper {
	let games: Game[] = [];
	const game$ = new Subject<Game>();
	const currentQueuer$ = new Subject<Queuer[]>();
	let pools: Pool[] = [];
	let queuers: Queuer[] = [];

	async function readGame(playsig: string) {
		const game = games.find((game) => game.playsig === playsig);
		return structuredClone(game);
	}

	async function saveGame(game: Game) {
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
		async readAllGames() {
			return structuredClone(games);
		},
		async readAndUpdateGame(playsig: string) {
			const game = games.find((game) => game.playsig === playsig);

			if (!game) {
				return;
			}

			return {
				game,
				commit: async (game: Game) => {
					return await saveGame(game);
				},
				async abort() {
					return;
				},
			};
		},
		saveGame,
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
			currentQueuer$.next(queuers);
			return true;
		},
		observeCreatedGame() {
			return game$.pipe(map((game) => structuredClone(game)));
		},
		observeGame(playsig: string) {
			return game$.pipe(
				filter((game) => game.playsig === playsig),
				map((game) => structuredClone(game)),
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

			return {
				game,
				pool,
				commit: async (pool: Pool, game: Game) => {
					const saved = await saveGame(game);

					if (!saved) {
						return false;
					}

					pools = pools.map((p) => (p.playsig === pool.playsig ? pool : p));

					return true;
				},
				async abort() {
					return;
				},
			};
		},
		async readQueuers() {
			return structuredClone(queuers);
		},
		async saveQueuer(queuer: Queuer) {
			const index = queuers.findIndex((q) => q.publicKey === queuer.publicKey);

			if (index !== -1) {
				return false;
			}

			queuers.push(queuer);
			currentQueuer$.next(queuers);
			return true;
		},
		observeQueuers() {
			return currentQueuer$.pipe(map((queuers) => structuredClone(queuers)));
		},
	};
}
