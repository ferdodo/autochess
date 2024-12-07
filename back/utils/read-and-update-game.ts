import type { DataSource } from "typeorm";
import type { Game } from "core/types/game";
import type { GameRepository } from "../repositories/game-repository";
import type { Playsig } from "core/types/playsig";

export async function readAndUpdateGame(
	dataSource: DataSource,
	_gameRepository: GameRepository,
	playsig: Playsig,
) {
	const queryRunner = dataSource.createQueryRunner();
	await queryRunner.connect();
	await queryRunner.startTransaction();
	const gameRepository = queryRunner.manager.withRepository(_gameRepository);
	const game = await gameRepository.findOneOrFail({ where: { playsig } });

	async function commit(game: Game) {
		const { affected } = await gameRepository.update({ playsig }, game);
		await queryRunner.commitTransaction();
		return Boolean(affected);
	}

	async function abort() {
		await queryRunner.rollbackTransaction();
	}

	return { game, commit, abort };
}
