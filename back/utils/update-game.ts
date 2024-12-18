import type { Game } from "core/types/game.js";
import type { RedisClientType } from "redis";
import { RedisEvent } from "../types/redis-events.js";

export async function updateGame(
	redis: RedisClientType,
	game: Game,
): Promise<boolean> {
	const key = `game:${game.playsig}`;
	const existing = await redis.get(key);

	if (!existing) {
		return false;
	}

	await redis.set(key, JSON.stringify(game));
	redis.publish(RedisEvent.GameUpdate, game.playsig);
	return true;
}
