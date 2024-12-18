import type { Pool } from "core/types/pool.js";
import type { RedisClientType } from "redis";

export async function createPool(
	redis: RedisClientType,
	pool: Pool,
): Promise<boolean> {
	const poolKey = `pool:${pool.playsig}`;
	const existingPoolString = await redis.get(poolKey);

	if (existingPoolString !== null) {
		return false;
	}

	const poolString = JSON.stringify(pool);
	await redis.set(poolKey, poolString);
	return true;
}
