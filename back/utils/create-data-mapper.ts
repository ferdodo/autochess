import type { DataMapper } from "core/types/data-mapper";
import { readGame } from "./read-game";
import { readAllGames } from "./read-all-games";
import { updateGame } from "./update-game";
import { readAndUpdateGame } from "./read-and-update-game";
import { createGameWithPoolAndDeleteQueuers } from "./create-game-with-pool-and-delete-queuers";
import { observeCreatedGame } from "./observe-created-game";
import { observeGame } from "./observe-game";
import { readPool } from "./read-pool";
import { observeQueuers } from "./observe-queuers";
import { createPool } from "./create-pool";
import { readAndUpdatePoolWithGame } from "./read-and-update-pool-with-game";
import { readQueuers } from "./read-queuers";
import { createQueuer } from "./create-queuer";
import type { Db } from "mongodb";
import type { MikroORM } from "@mikro-orm/core";
import type { Game } from "core/types/game";
import type { Queuer } from "core/types/queuer";

export function createDataMapper(orm: MikroORM, db: Db): DataMapper {
	const gameCollection = db.collection<Game>("games");
	const queuerCollection = db.collection<Queuer>("queuers");

	return {
		readGame: (playsig) => readGame(orm, playsig),
		readAllGames: () => readAllGames(orm),
		updateGame: (game) => updateGame(orm, game),
		readAndUpdateGame: (playsig) => readAndUpdateGame(orm, playsig),
		createGameWithPoolAndDeleteQueuers: (game, pool, queuersPublicKeys) =>
			createGameWithPoolAndDeleteQueuers(orm, game, pool, queuersPublicKeys),
		createdGame$: observeCreatedGame(gameCollection),
		observeGame: (playsig) => observeGame(gameCollection, playsig),
		readPool: (playsig) => readPool(orm, playsig),
		createPool: (pool) => createPool(orm, pool),
		readAndUpdatePoolWithGame: (playsig) =>
			readAndUpdatePoolWithGame(orm, playsig),
		readQueuers: () => readQueuers(orm),
		createQueuer: (queuer) => createQueuer(orm, queuer),
		queuers$: observeQueuers(orm, queuerCollection),
	};
}
