import { createClient } from "redis";
import type { RedisClientType } from "redis";

export async function createRedisClient(): Promise<RedisClientType> {
	const client: RedisClientType = createClient({
		url: process.env.REDIS_URL,
	});

	await client.connect();
	return client;
}
