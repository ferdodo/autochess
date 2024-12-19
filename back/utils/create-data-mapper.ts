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
import { Observable, share } from "rxjs";
import { RedisEvent } from "../types/redis-events.js";

export function createDataMapper(
	redis: RedisClientType,
	pubsub: RedisClientType,
): DataMapper {
	const RedisEvents$: Observable<[RedisEvent, string]> = new Observable<
		[RedisEvent, string]
	>((observer) => {
		for (const event of Object.values(RedisEvent)) {
			pubsub.subscribe(event, (message) => {
				observer.next([event, message]);
			});
		}
	}).pipe(share());

	return {
		readGame: (playsig) => readGame(redis, playsig),
		updateGame: (game) => updateGame(redis, game),
		readAndUpdateGame: (playsig) => readAndUpdateGame(redis, playsig),
		createGameWithPoolAndDeleteQueuers: (game, pool, queuersPublicKeys) =>
			createGameWithPoolAndDeleteQueuers(redis, game, pool, queuersPublicKeys),
		createdGame$: observeCreatedGame(redis, RedisEvents$),
		observeGame: (playsig) => observeGame(redis, RedisEvents$, playsig),
		readPool: (playsig) => readPool(redis, playsig),
		createPool: (pool) => createPool(redis, pool),
		readAndUpdatePoolWithGame: (playsig) =>
			readAndUpdatePoolWithGame(redis, playsig),
		readQueuers: () => readQueuers(redis),
		createQueuer: (queuer) => createQueuer(redis, queuer),
		deleteQueuer: (publicKey) => deleteQueuer(redis, publicKey),
		queuers$: observeQueuers(redis, RedisEvents$),
	};
}
