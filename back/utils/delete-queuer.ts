import type { PublicKey } from "core/types/public-key.js";
import type { RedisClientType } from "redis";
import { RedisEvent } from "../types/redis-events.js";
import type { MikroORM } from "@mikro-orm/core";
import { QueuerEntity } from "../entities/queuer.js";

export async function deleteQueuer(
	orm: MikroORM,
	redisClient: RedisClientType,
	publicKey: PublicKey,
): Promise<boolean> {
	try {
		const em = orm.em.fork();
		const queuerRepository = em.getRepository(QueuerEntity);
		await queuerRepository.nativeDelete({ publicKey });
		await em.flush();
		redisClient.publish(RedisEvent.QueuerLeave, "");
		return true;
	} catch (_e) {
		return false;
	}
}
