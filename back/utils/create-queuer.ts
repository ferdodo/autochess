import { QueuerEntity } from "../entities/queuer.js";
import type { Queuer } from "core/types/queuer.js";
import type { MikroORM } from "@mikro-orm/core";
import type { RedisClientType } from "redis";
import { RedisEvent } from "../types/redis-events.js";

export async function createQueuer(
	orm: MikroORM,
	redis: RedisClientType,
	queuer: Queuer,
): Promise<boolean> {
	const em = orm.em.fork();
	const queuerRepository = em.getRepository(QueuerEntity);
	await queuerRepository.create(queuer);
	await em.flush();
	redis.publish(RedisEvent.QueuerJoin, "");
	return true;
}
