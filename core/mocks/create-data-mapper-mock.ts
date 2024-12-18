import type { Game } from "../types/game.js";
import type { Queuer } from "../types/queuer.js";
import { Subject, filter, map } from "rxjs";
import type { DataMapper } from "../types/data-mapper.js";
import type { Pool } from "../types/pool.js";
import type { PublicKey } from "../types/public-key.js";

export function createDataMapperMock(): DataMapper {
	let games: Game[] = [];
	const game$ = new Subject<Game>();
	const createdGames$ = new Subject<Game>();
	const currentQueuer$ = new Subject<Queuer[]>();
	let pools: Pool[] = [];
	let queuers: Queuer[] = [];

	async function readGame(playsig: string) {
		const game = games.find((game) => game.playsig === playsig);
		return structuredClone(game);
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
			const game = structuredClone(
				games.find((game) => game.playsig === playsig),
			);

			if (!game) {
				return;
			}

			return {
				game,
				commit: async (game: Game) => {
					return await updateGame(game);
				},
				async abort() {
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
		createdGame$: createdGames$.pipe(map((game) => structuredClone(game))),
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
					const saved = await updateGame(game);

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
	};
}
