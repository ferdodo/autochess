import { Observable, share } from "rxjs";
import { RedisEvent } from "../types/redis-events.js";
import type { RedisClientType } from "redis";

export function createPubsubEventObservable(
	redis: RedisClientType,
): Observable<[RedisEvent, string]> {
	return new Observable<[RedisEvent, string]>((observer) => {
		for (const event of Object.values(RedisEvent)) {
			redis.subscribe(event, (message) => {
				observer.next([event, message]);
			});
		}
	}).pipe(share());
}
