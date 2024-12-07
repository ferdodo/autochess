import type { DataSource } from "typeorm";
import type { Game } from "core/types/game";
import type { GameRepository } from "../repositories/game-repository";
import type { Playsig } from "core/types/playsig";
import type { PoolRepository } from "../repositories/pool-repository";
import type { Pool } from "core/types/pool";

export async function readAndUpdatePoolWithGame(
	dataSource: DataSource,
	_gameRepository: GameRepository,
	_poolRepository: PoolRepository,
	playsig: Playsig,
) {
	const queryRunner = dataSource.createQueryRunner();
	await queryRunner.connect();
	await queryRunner.startTransaction();
	const gameRepository = queryRunner.manager.withRepository(_gameRepository);
	const poolRepository = queryRunner.manager.withRepository(_poolRepository);
	const game = await gameRepository.findOneOrFail({ where: { playsig } });
	const pool = await poolRepository.findOneOrFail({ where: { playsig } });

	async function commit(pool: Pool, game: Game) {
		const { affected } = await gameRepository.update({ playsig }, game);

		const { affected: affectedPool } = await poolRepository.update(
			{ playsig },
			pool,
		);

		await queryRunner.commitTransaction();
		return Boolean(affected && affectedPool);
	}

	async function abort() {
		await queryRunner.rollbackTransaction();
	}

	return { game, pool, commit, abort };
}
