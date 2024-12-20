import type { Observable } from "rxjs";
import type { Game } from "core/types/game.js";
import type { Playsig } from "core/types/playsig.js";
import { filter, mergeMap } from "rxjs/operators";
import { RedisEvent } from "../types/redis-events.js";
import type { MikroORM } from "@mikro-orm/core";
import { GameEntity } from "../entities/game.js";

export function observeGame(
	orm: MikroORM,
	redisEvents$: Observable<[RedisEvent, string]>,
	playsig: Playsig,
): Observable<Game> {
	return redisEvents$.pipe(
		filter(
			([message, content]) =>
				message === RedisEvent.GameUpdate && content === playsig,
		),
		mergeMap(async () => {
			const em = orm.em.fork();
			const gameRepository = em.getRepository(GameEntity);
			const game = await gameRepository.findOneOrFail({ playsig });
			return game;
		}),
	);
}
