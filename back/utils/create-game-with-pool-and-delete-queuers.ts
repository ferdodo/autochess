import type { DataSource } from "typeorm";
import type { Game } from "core/types/game";
import type { GameRepository } from "../repositories/game-repository";
import type { Pool } from "core/types/pool";
import type { PoolRepository } from "../repositories/pool-repository";
import type { QueuerRepository } from "../repositories/queuer-repository";
import type { PublicKey } from "core/types/public-key";

export async function createGameWithPoolAndDeleteQueuers(
	dataSource: DataSource,
	_gameRepository: GameRepository,
	_poolRepository: PoolRepository,
	_queuerRepository: QueuerRepository,
	game: Game,
	pool: Pool,
	queuersPublicKeys: PublicKey[],
) {
	try {
		const queryRunner = dataSource.createQueryRunner();
		await queryRunner.connect();
		await queryRunner.startTransaction();
		const manager = queryRunner.manager;
		const gameRepository = manager.withRepository(_gameRepository);
		const poolRepository = manager.withRepository(_poolRepository);
		const queuerRepository = manager.withRepository(_queuerRepository);
		await gameRepository.create(game);
		await poolRepository.create(pool);

		for (const publicKey of queuersPublicKeys) {
			await queuerRepository.delete({ publicKey });
		}

		await queryRunner.commitTransaction();
		return true;
	} catch (error) {
		return false;
	}
}
