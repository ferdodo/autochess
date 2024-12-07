import type { DataMapper } from "core/types/data-mapper";
import { readGame } from "./read-game";
import type { DataSource } from "typeorm";
import {
	getGameCollection,
	getGameRepository,
} from "../repositories/game-repository";
import { readAllGames } from "./read-all-games";
import { updateGame } from "./update-game";
import { readAndUpdateGame } from "./read-and-update-game";
import { createGameWithPoolAndDeleteQueuers } from "./create-game-with-pool-and-delete-queuers";
import { getPoolRepository } from "../repositories/pool-repository";
import {
	getQueuerCollection,
	getQueuerRepository,
} from "../repositories/queuer-repository";
import { observeCreatedGame } from "./observe-created-game";
import { observeGame } from "./observe-game";
import { readPool } from "./read-pool";
import { observeQueuers } from "./observe-queuers";
import { createPool } from "./create-pool";
import { readAndUpdatePoolWithGame } from "./read-and-update-pool-with-game";
import { readQueuers } from "./read-queuers";
import { createQueuer } from "./create-queuer";

export function createDataMapper(dataSource: DataSource): DataMapper {
	const gameRepository = getGameRepository(dataSource);
	const poolRepository = getPoolRepository(dataSource);
	const queuerRepository = getQueuerRepository(dataSource);
	const gameCollection = getGameCollection(dataSource);
	const queuerCollection = getQueuerCollection(dataSource);

	return {
		readGame: (playsig) => readGame(gameRepository, playsig),
		readAllGames: () => readAllGames(gameRepository),
		updateGame: (game) => updateGame(gameRepository, game),
		readAndUpdateGame: (playsig) =>
			readAndUpdateGame(dataSource, gameRepository, playsig),
		createGameWithPoolAndDeleteQueuers: (game, pool, queuersPublicKeys) =>
			createGameWithPoolAndDeleteQueuers(
				dataSource,
				gameRepository,
				poolRepository,
				queuerRepository,
				game,
				pool,
				queuersPublicKeys,
			),
		createdGame$: observeCreatedGame(gameCollection),
		observeGame: (playsig) => observeGame(gameCollection, playsig),
		readPool: (playsig) => readPool(poolRepository, playsig),
		createPool: (pool) => createPool(poolRepository, pool),
		readAndUpdatePoolWithGame: (playsig) =>
			readAndUpdatePoolWithGame(
				dataSource,
				gameRepository,
				poolRepository,
				playsig,
			),
		readQueuers: () => readQueuers(queuerRepository),
		createQueuer: (queuer) => createQueuer(queuerRepository, queuer),
		queuers$: observeQueuers(queuerCollection, queuerRepository),
	};
}
