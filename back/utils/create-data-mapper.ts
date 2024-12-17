import type { DataMapper } from "core/types/data-mapper";
import { readGame } from "./read-game.js";
import { readAllGames } from "./read-all-games.js";
import { updateGame } from "./update-game.js";
import { readAndUpdateGame } from "./read-and-update-game.js";
import { createGameWithPoolAndDeleteQueuers } from "./create-game-with-pool-and-delete-queuers.js";
import { observeCreatedGame } from "./observe-created-game.js";
import { observeGame } from "./observe-game.js";
import { readPool } from "./read-pool.js";
import { observeQueuers } from "./observe-queuers.js";
import { createPool } from "./create-pool.js";
import { readAndUpdatePoolWithGame } from "./read-and-update-pool-with-game.js";
import { readQueuers } from "./read-queuers.js";
import { createQueuer } from "./create-queuer.js";
import type { Db } from "mongodb";
import type { MikroORM } from "@mikro-orm/core";
import type { Game } from "core/types/game";
import type { Queuer } from "core/types/queuer";
import type { MongoSerialized } from "../types/mongo-serialized.js";
import { deleteQueuer } from "./delete-queuer.js";

export function createDataMapper(orm: MikroORM, db: Db): DataMapper {
	const gameCollection = db.collection<MongoSerialized<Game>>("game");
	const queuerCollection = db.collection<MongoSerialized<Queuer>>("queuer");

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
		deleteQueuer: (publicKey) => deleteQueuer(orm, publicKey),
		queuers$: observeQueuers(orm, queuerCollection),
	};
}
