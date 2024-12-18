import type { Observable } from "rxjs";
import type { Game } from "core/types/game.js";
import type { Playsig } from "core/types/playsig.js";
import type { RedisClientType } from "redis";
import { filter, mergeMap } from "rxjs/operators";
import { RedisEvent } from "../types/redis-events.js";

export function observeGame(
	redis: RedisClientType,
	redisEvents$: Observable<[RedisEvent, string]>,
	playsig: Playsig,
): Observable<Game> {
	return redisEvents$.pipe(
		filter(
			([message, content]) =>
				message === RedisEvent.GameUpdate && content === playsig,
		),
		mergeMap(async () => {
			const key = `game:${playsig}`;
			const gameString = await redis.get(key);

			if (!gameString) {
				return [];
			}

			return JSON.parse(gameString);
		}),
	);
}
