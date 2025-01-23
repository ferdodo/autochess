import { Observable, share } from "rxjs";
import { BackEvent } from "../types/back-events.js";
import type { Bus } from "../types/pub-sub.js";
import { createClient } from "redis";
import type { RedisClientType } from "redis";

export async function createBus(): Promise<Bus> {
	const url = process.env.REDIS_URL;
	const redisPub: RedisClientType = createClient({ url });
	const redisSub: RedisClientType = createClient({ url });
	await redisPub.connect();
	await redisSub.connect();

	const events$ = new Observable<[BackEvent, string]>((observer) => {
		for (const event of Object.values(BackEvent)) {
			redisSub.subscribe(event, (message) => {
				observer.next([event, message]);
			});
		}
	}).pipe(share());

	const publish = (event: BackEvent, message: string) => {
		redisPub.publish(event, message);
	};

	return { publish, events$ };
}
