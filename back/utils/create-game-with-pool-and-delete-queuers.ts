import type { Game } from "core/types/game";
import { GameEntity } from "../entities/game.js";
import type { Pool } from "core/types/pool";
import { PoolEntity } from "../entities/pool.js";
import { QueuerEntity } from "../entities/queuer.js";
import type { PublicKey } from "core/types/public-key";
import type { MikroORM } from "@mikro-orm/core";
import { mongoSerialize } from "./mongo-serialize.js";

export async function createGameWithPoolAndDeleteQueuers(
	orm: MikroORM,
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
		await gameRepository.create(mongoSerialize(game));
		await poolRepository.create(mongoSerialize(pool));

		for (const publicKey of queuersPublicKeys) {
			await queuerRepository.nativeDelete({ publicKey });
		}

		await em.flush();
		await em.commit();
		return true;
	} catch (error) {
		await em.rollback();
		throw error;
	}
}
