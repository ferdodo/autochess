import type { Game } from "core/types/game.js";
import type { Playsig } from "core/types/playsig.js";
import type { RedisClientType } from "redis";

export async function readGame(
	redis: RedisClientType,
	playsig: Playsig,
): Promise<Game | undefined> {
	const key = `game:${playsig}`;
	const existing = await redis.get(key);

	if (!existing) {
		return undefined;
	}

	return JSON.parse(existing);
}
