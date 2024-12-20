import type { Queuer } from "core/types/queuer.js";
import type { Observable } from "rxjs";
import { filter, mergeMap } from "rxjs/operators";
import { RedisEvent } from "../types/redis-events.js";
import { QueuerEntity } from "../entities/queuer.js";
import type { MikroORM } from "@mikro-orm/core";

export function observeQueuers(
	orm: MikroORM,
	redisEvents$: Observable<[RedisEvent, string]>,
): Observable<Queuer[]> {
	return redisEvents$.pipe(
		filter(
			([message]) =>
				message === RedisEvent.QueuerJoin || message === RedisEvent.QueuerLeave,
		),
		mergeMap(async () => {
			const em = orm.em.fork();
			const queuerRepository = em.getRepository(QueuerEntity);
			return await queuerRepository.findAll();
		}),
	);
}
