import type { Game } from "core/types/game.js";
import { GameEntity } from "../entities/game.js";
import type { Playsig } from "core/types/playsig.js";
import type { MikroORM } from "@mikro-orm/core";
import type { RedisClientType } from "redis";
import { RedisEvent } from "../types/redis-events.js";

export async function readAndUpdateGame(
	orm: MikroORM,
	redis: RedisClientType,
	playsig: Playsig,
) {
	const em = orm.em.fork();
	await em.begin();
	const gameRepository = em.getRepository(GameEntity);
	const game = await gameRepository.findOneOrFail({ playsig });

	async function commit(game: Game) {
		const affected = await gameRepository.nativeUpdate({ playsig }, game);
		await em.flush();
		await em.commit();
		redis.publish(RedisEvent.GameUpdate, playsig);
		return Boolean(affected);
	}

	async function abort() {
		await em.rollback();
	}

	return { game, commit, abort };
}
