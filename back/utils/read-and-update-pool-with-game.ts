import type { Game } from "core/types/game";
import { GameEntity } from "../entities/game";
import type { Playsig } from "core/types/playsig";
import type { Pool } from "core/types/pool";
import type { MikroORM } from "@mikro-orm/core";
import { PoolEntity } from "../entities/pool";

export async function readAndUpdatePoolWithGame(
	orm: MikroORM,
	playsig: Playsig,
) {
	const em = orm.em.fork();
	await em.begin();
	const gameRepository = em.getRepository(GameEntity);
	const poolRepository = em.getRepository(PoolEntity);
	const game = await gameRepository.findOneOrFail({ playsig });
	const pool = await poolRepository.findOneOrFail({ playsig });

	async function commit(pool: Pool, game: Game) {
		const affected = await gameRepository.nativeUpdate({ playsig }, game);
		const affectedPool = await poolRepository.nativeUpdate({ playsig }, pool);
		await em.flush();
		await em.commit();
		return Boolean(affected && affectedPool);
	}

	async function abort() {
		await em.rollback();
	}

	return { game, pool, commit, abort };
}