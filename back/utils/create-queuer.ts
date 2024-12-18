import type { Queuer } from "core/types/queuer.js";
import type { RedisClientType } from "redis";
import { RedisEvent } from "../types/redis-events.js";

export async function createQueuer(
	redis: RedisClientType,
	queuer: Queuer,
): Promise<boolean> {
	const queuerKey = `queuer:${queuer.publicKey}`;
	const existingQueuerString = await redis.get(queuerKey);

	if (existingQueuerString !== null) {
		return false;
	}

	const queuerString = JSON.stringify(queuer);
	await redis.set(queuerKey, queuerString);
	redis.publish(RedisEvent.QueuerJoin, "");
	return true;
}
