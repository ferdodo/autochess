import type { DataMapper } from "core/types/data-mapper.js";
import { readGame } from "./read-game.js";
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
import { deleteQueuer } from "./delete-queuer.js";
import type { RedisClientType } from "redis";
import type { MikroORM } from "@mikro-orm/core";
import { createPubsubEventObservable } from "./create-pubsub-event-observable.js";

export function createDataMapper(
	orm: MikroORM,
	redis: RedisClientType,
	redisPub: RedisClientType,
): DataMapper {
	const RedisEvents$ = createPubsubEventObservable(redis);

	return {
		readGame: (playsig) => readGame(orm, playsig),
		updateGame: (game) => updateGame(orm, redisPub, game),
		readAndUpdateGame: (playsig) => readAndUpdateGame(orm, redisPub, playsig),
		createGameWithPoolAndDeleteQueuers: (game, pool, queuersPublicKeys) =>
			createGameWithPoolAndDeleteQueuers(
				orm,
				redisPub,
				game,
				pool,
				queuersPublicKeys,
			),
		createdGame$: observeCreatedGame(orm, RedisEvents$),
		observeGame: (playsig) => observeGame(orm, RedisEvents$, playsig),
		readPool: (playsig) => readPool(orm, playsig),
		createPool: (pool) => createPool(orm, pool),
		readAndUpdatePoolWithGame: (playsig) =>
			readAndUpdatePoolWithGame(orm, redisPub, playsig),
		readQueuers: () => readQueuers(orm),
		createQueuer: (queuer) => createQueuer(orm, redisPub, queuer),
		deleteQueuer: (publicKey) => deleteQueuer(orm, redisPub, publicKey),
		queuers$: observeQueuers(orm, RedisEvents$),
	};
}
