import type { Game } from "core/types/game.js";
import type { Playsig } from "core/types/playsig.js";
import type { Pool } from "core/types/pool.js";
import type { RedisClientType } from "redis";
import { RedisEvent } from "../types/redis-events.js";

export async function readAndUpdatePoolWithGame(
	redis: RedisClientType,
	playsig: Playsig,
) {
	const key = `pool:${playsig}`;
	const gameKey = `game:${playsig}`;
	const transaction = redis.multi();
	await redis.watch([key, gameKey]);
	const poolString = await redis.get(key);

	if (!poolString) {
		transaction.discard();
		throw new Error("Pool not found !");
	}

	const gameString = await redis.get(gameKey);

	if (!gameString) {
		transaction.discard();
		throw new Error("Game not found !");
	}

	async function commit(pool: Pool, game: Game) {
		transaction.set(key, JSON.stringify(pool));
		transaction.set(gameKey, JSON.stringify(game));
		await transaction.exec();
		redis.publish(RedisEvent.GameUpdate, playsig);
		return true;
	}

	async function abort() {
		await transaction.discard();
	}

	const game: Game = JSON.parse(gameString);
	const pool: Pool = JSON.parse(poolString);
	return { game, pool, commit, abort };
}
