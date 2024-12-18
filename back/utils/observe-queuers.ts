import type { Queuer } from "core/types/queuer.js";
import type { Observable } from "rxjs";
import type { RedisClientType } from "redis";
import { filter, mergeMap } from "rxjs/operators";
import { RedisEvent } from "../types/redis-events.js";

export function observeQueuers(
	redis: RedisClientType,
	redisEvents$: Observable<[RedisEvent, string]>,
): Observable<Queuer[]> {
	return redisEvents$.pipe(
		filter(
			([message]) =>
				message === RedisEvent.QueuerJoin || message === RedisEvent.QueuerLeave,
		),
		mergeMap(async () => {
			const queuersString = await redis.get("queuers");

			if (!queuersString) {
				return [];
			}

			return JSON.parse(queuersString);
		}),
	);
}
