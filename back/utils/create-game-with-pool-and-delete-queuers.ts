import type { Game } from "core/types/game.js";
import { GameEntity } from "../entities/game.js";
import type { Pool } from "core/types/pool.js";
import { PoolEntity } from "../entities/pool.js";
import { QueuerEntity } from "../entities/queuer.js";
import type { PublicKey } from "core/types/public-key.js";
import type { MikroORM } from "@mikro-orm/core";
import type { RedisClientType } from "redis";
import { RedisEvent } from "../types/redis-events.js";

export async function createGameWithPoolAndDeleteQueuers(
	orm: MikroORM,
	redis: RedisClientType,
	game: Game,
	pool: Pool,
	queuersPublicKeys: PublicKey[],
) {
	const em = orm.em.fork();

	try {
		await em.begin();
		const gameRepository = em.getRepository(GameEntity);
		const poolRepository = em.getRepository(PoolEntity);
		const queuerRepository = em.getRepository(QueuerEntity);
		await gameRepository.create(game);
		await poolRepository.create(pool);

		for (const publicKey of queuersPublicKeys) {
			await queuerRepository.nativeDelete({ publicKey });
		}

		await em.flush();
		await em.commit();
		redis.publish(RedisEvent.GameCreate, game.playsig);
		redis.publish(RedisEvent.QueuerLeave, "");
		return true;
	} catch (error) {
		await em.rollback();
		throw error;
	}
}
