import type { Observable } from "rxjs";
import type { Game } from "core/types/game.js";
import type { RedisClientType } from "redis";
import { filter, mergeMap } from "rxjs/operators";
import { RedisEvent } from "../types/redis-events.js";

export function observeCreatedGame(
	redis: RedisClientType,
	redisEvents$: Observable<[RedisEvent, string]>,
): Observable<Game> {
	return redisEvents$.pipe(
		filter(([message]) => message === RedisEvent.GameCreate),
		mergeMap(async ([_, playsig]) => {
			const gameString = await redis.get(`game:${playsig}`);

			if (!gameString) {
				console.warn("Game should exist as it was just created !");
				return null;
			}

			return JSON.parse(gameString);
		}),
		filter(Boolean),
	);
}
