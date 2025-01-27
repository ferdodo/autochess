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
import type { MikroORM } from "@mikro-orm/core";
import type { Bus } from "../types/pub-sub.js";
import { readRanking } from "./read-ranking.js";
import { readAndUpsertRankingsAndCreateEncounters } from "./read-and-upsert-rankings-and-create-encounters.js";
import type { Metrics } from "core/types/metrics.js";

export function createDataMapper(
	orm: MikroORM,
	bus: Bus,
	metrics: Metrics,
): DataMapper {
	return {
		readGame: (playsig) => readGame(orm, playsig),
		updateGame: (game) => updateGame(orm, bus, game),
		readAndUpdateGame: (playsig) =>
			readAndUpdateGame(orm, bus, metrics, playsig),
		createGameWithPoolAndDeleteQueuers: (game, pool, queuersPublicKeys) =>
			createGameWithPoolAndDeleteQueuers(
				orm,
				bus,
				game,
				pool,
				queuersPublicKeys,
			),
		createdGame$: observeCreatedGame(orm, bus),
		observeGame: observeGame(orm, bus),
		readPool: (playsig) => readPool(orm, playsig),
		createPool: (pool) => createPool(orm, pool),
		readAndUpdatePoolWithGame: (playsig) =>
			readAndUpdatePoolWithGame(orm, bus, metrics, playsig),
		readQueuers: () => readQueuers(orm),
		createQueuer: (queuer) => createQueuer(orm, bus, queuer),
		deleteQueuer: (publicKey) => deleteQueuer(orm, bus, publicKey),
		queuers$: observeQueuers(orm, bus),
		readAndUpsertRankingsAndCreateEncounters: (playersPublicKeys) =>
			readAndUpsertRankingsAndCreateEncounters(orm, metrics, playersPublicKeys),
		readRanking: (publicKey) => readRanking(orm, publicKey),
	};
}
