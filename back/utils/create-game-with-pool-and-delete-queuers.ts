import type { Game } from "core/types/game";
import { getGameRepository } from "../repositories/game-repository";
import type { Pool } from "core/types/pool";
import { getPoolRepository } from "../repositories/pool-repository";
import { getQueuerRepository } from "../repositories/queuer-repository";
import type { PublicKey } from "core/types/public-key";
import type { MikroORM } from "@mikro-orm/core";

export async function createGameWithPoolAndDeleteQueuers(
	orm: MikroORM,
	game: Game,
	pool: Pool,
	queuersPublicKeys: PublicKey[],
) {
	const em = orm.em.fork();

	try {
		await em.begin();
		const gameRepository = getGameRepository(em);
		const poolRepository = getPoolRepository(em);
		const queuerRepository = getQueuerRepository(em);

		await gameRepository.create({
			_id: Math.random().toString(),
			...game,
		});

		await poolRepository.create({
			_id: Math.random().toString(),
			...pool,
		});

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
