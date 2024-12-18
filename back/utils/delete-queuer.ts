import type { PublicKey } from "core/types/public-key.js";
import type { RedisClientType } from "redis";
import { RedisEvent } from "../types/redis-events.js";

export async function deleteQueuer(
	redisClient: RedisClientType,
	publicKey: PublicKey,
): Promise<boolean> {
	const existingQueuerString = await redisClient.get(`queuer:${publicKey}`);

	if (existingQueuerString === null) {
		return false;
	}

	const queuers = JSON.parse(existingQueuerString);

	const newQueuers = queuers.filter(
		(queuer: PublicKey) => queuer !== publicKey,
	);

	await redisClient.set("queuers", JSON.stringify(newQueuers));
	redisClient.publish(RedisEvent.QueuerLeave, "");
}
