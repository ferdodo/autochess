import type { Game } from "core/types/game";
import { GameEntity } from "../entities/game.js";
import type { Playsig } from "core/types/playsig";
import type { Pool } from "core/types/pool";
import type { MikroORM } from "@mikro-orm/core";
import { PoolEntity } from "../entities/pool.js";
import type { MongoDeserialized } from "../types/mongo-deserialized.js";
import { mongoDeserialize } from "./mongo-deserialize.js";

export async function readAndUpdatePoolWithGame(
	orm: MikroORM,
	playsig: Playsig,
) {
	const em = orm.em.fork();
	await em.begin();
	const gameRepository = em.getRepository(GameEntity);
	const poolRepository = em.getRepository(PoolEntity);
	const _game = await gameRepository.findOneOrFail({ playsig });
	const game: MongoDeserialized<Game> = mongoDeserialize(_game);
	const _pool = await poolRepository.findOneOrFail({ playsig });
	const pool: MongoDeserialized<Pool> = mongoDeserialize(_pool);

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
