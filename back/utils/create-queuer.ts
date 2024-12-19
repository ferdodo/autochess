import type { Queuer } from "core/types/queuer.js";
import type { RedisClientType } from "redis";
import { RedisEvent } from "../types/redis-events.js";

export async function createQueuer(
	redis: RedisClientType,
	queuer: Queuer,
): Promise<boolean> {
	try {
		const queuerKey = "queuers";
		await redis.watch(queuerKey);
		const existingQueuersString = await redis.get(queuerKey);

		const existingQueuers = existingQueuersString
			? JSON.parse(existingQueuersString)
			: [];

		const newQueuers = [...existingQueuers, queuer];
		const queuersString = JSON.stringify(newQueuers);
		await redis.set(queuerKey, queuersString);
		await redis.unwatch();
		redis.publish(RedisEvent.QueuerJoin, "");
		return true;
	} catch (e) {
		await redis.unwatch();
		if (
			e.message.includes("One (or more) of the watched keys has been changed")
		) {
			return false;
		}

		throw e;
	}
}
