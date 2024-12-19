import type { Queuer } from "core/types/queuer.js";
import type { RedisClientType } from "redis";
import { RedisEvent } from "../types/redis-events.js";
import { humanReadable } from "core/utils/human-readable.js";

export async function createQueuer(
	redis: RedisClientType,
	queuer: Queuer,
): Promise<boolean> {
	const queuerKey = "queuers";
	//await redis.watch(queuerKey);
	const existingQueuersString = await redis.get(queuerKey);

	const existingQueuers = existingQueuersString
		? JSON.parse(existingQueuersString)
		: [];

	const newQueuers = [...existingQueuers, queuer];
	const queuersString = JSON.stringify(newQueuers);
	await redis.set(queuerKey, queuersString);
	redis.publish(RedisEvent.QueuerJoin, "");
	console.log("Queuer created:", humanReadable(queuer.publicKey));
	return true;
}
