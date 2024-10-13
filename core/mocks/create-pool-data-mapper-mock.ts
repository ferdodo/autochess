import type { Game } from "../types/game";
import type { GameDataMapper } from "../types/game-data-mapper";
import type { Pool } from "../types/pool";

export function createPoolDataMapperMock(gameDataMapper: GameDataMapper) {
	let pools: Pool[] = [];

	return {
		async read(playsig: string) {
			return pools.find((p) => p.playsig === playsig);
		},
		async create(pool: Pool) {
			const alreadyExists = pools.some((p) => p.playsig === pool.playsig);

			if (alreadyExists) {
				return false;
			}

			pools.push(pool);

			return true;
		},
		async readAndUpdateWithGame(playsig: string) {
			const pool = pools.find((p) => p.playsig === playsig);
			const game = await gameDataMapper.read(playsig);

			if (!game || !pool) {
				return;
			}

			return {
				game,
				pool,
				async commit(pool: Pool, game: Game) {
					const saved = await gameDataMapper.update(game);
					const alreadyExists = pools.some((p) => p.playsig === pool.playsig);

					if (alreadyExists || !saved) {
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
	};
}
