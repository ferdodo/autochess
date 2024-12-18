import type { Game } from "core/types/game.js";
import type { Playsig } from "core/types/playsig.js";
import type { RedisClientType } from "redis";
import { RedisEvent } from "../types/redis-events.js";

export async function readAndUpdateGame(
	redis: RedisClientType,
	playsig: Playsig,
) {
	const key = `game:${playsig}`;
	await redis.watch(key);
	const transaction = redis.multi();
	const gameString = await redis.get(key);

	if (!gameString) {
		transaction.discard();
		throw new Error("Game not found !");
	}

	async function commit(game: Game) {
		transaction.set(key, JSON.stringify(game));
		await transaction.exec();
		redis.publish(RedisEvent.GameUpdate, playsig);
		return true;
	}

	async function abort() {
		await transaction.discard();
	}

	const game: Game = JSON.parse(gameString);
	return { game, commit, abort };
}
