import type { Observable } from "rxjs";
import type { Game } from "core/types/game.js";
import { filter, mergeMap } from "rxjs/operators";
import { RedisEvent } from "../types/redis-events.js";
import { GameEntity } from "../entities/game.js";
import type { MikroORM } from "@mikro-orm/core";

export function observeCreatedGame(
	orm: MikroORM,
	redisEvents$: Observable<[RedisEvent, string]>,
): Observable<Game> {
	return redisEvents$.pipe(
		filter(([message]) => message === RedisEvent.GameCreate),
		mergeMap(async ([_, playsig]) => {
			const em = orm.em.fork();
			const gameRepository = em.getRepository(GameEntity);
			const game = await gameRepository.findOne({ playsig });
			return game || undefined;
		}),
		filter(Boolean),
	);
}
