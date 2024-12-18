import type { Queuer } from "core/types/queuer.js";
import type { RedisClientType } from "redis";

export async function readQueuers(redis: RedisClientType): Promise<Queuer[]> {
	const key = "queuers";
	const existing = await redis.get(key);

	if (!existing) {
		return [];
	}

	return JSON.parse(existing);
}
