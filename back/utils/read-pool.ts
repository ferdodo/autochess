import type { Pool } from "core/types/pool.js";
import type { Playsig } from "core/types/playsig.js";
import type { RedisClientType } from "redis";

export async function readPool(
	redis: RedisClientType,
	playsig: Playsig,
): Promise<Pool> {
	const key = `pool:${playsig}`;
	const existing = await redis.get(key);

	if (!existing) {
		throw new Error("Pool not found !");
	}

	return JSON.parse(existing);
}
