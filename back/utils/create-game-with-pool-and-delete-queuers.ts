import type { Game } from "core/src/types/Game.js";
import { GameEntity } from "../entities/game.js";
import type { Pool } from "core/src/types/Pool.js";
import { PoolEntity } from "../entities/pool.js";
import { QueuerEntity } from "../entities/queuer.js";
import type { PublicKey } from "core/src/types/PublicKey.js";
import type { MikroORM } from "@mikro-orm/core";
import { BackEvent } from "../types/back-events.js";
import type { Bus } from "../types/pub-sub.js";

export async function createGameWithPoolAndDeleteQueuers(
	orm: MikroORM,
	bus: Bus,
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
			const deleted = await queuerRepository.nativeDelete({ publicKey });

			if (deleted === 0) {
				await em.rollback();
				return;
			}
		}

		await em.flush();
		await em.commit();
		bus.publish(BackEvent.GameCreate, game.playsig);
		bus.publish(BackEvent.QueuerLeave, "");
		return true;
	} catch (error) {
		await em.rollback();
		throw error;
	}
}
