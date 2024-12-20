import type { Game } from "core/types/game.js";
import type { RedisClientType } from "redis";
import { RedisEvent } from "../types/redis-events.js";
import { GameEntity } from "../entities/game.js";
import type { MikroORM } from "@mikro-orm/core";

export async function updateGame(
	orm: MikroORM,
	redis: RedisClientType,
	game: Game,
): Promise<boolean> {
	const em = orm.em.fork();
	const gameRepository = em.getRepository(GameEntity);
	const playsig = game.playsig;

	if (!playsig) {
		return false;
	}

	const affected = await gameRepository.nativeUpdate({ playsig }, game);

	if (affected) {
		redis.publish(RedisEvent.GameUpdate, game.playsig);
	}

	return Boolean(affected);
}
