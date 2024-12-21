import type { Queuer } from "core/types/queuer.js";
import type { Observable } from "rxjs";
import { filter, mergeMap } from "rxjs/operators";
import { BackEvent } from "../types/back-events.js";
import { QueuerEntity } from "../entities/queuer.js";
import type { MikroORM } from "@mikro-orm/core";
import type { Bus } from "../types/pub-sub.js";

export function observeQueuers(orm: MikroORM, bus: Bus): Observable<Queuer[]> {
	return bus.events$.pipe(
		filter(
			([message]) =>
				message === BackEvent.QueuerJoin || message === BackEvent.QueuerLeave,
		),
		mergeMap(async () => {
			const em = orm.em.fork();
			const queuerRepository = em.getRepository(QueuerEntity);
			return await queuerRepository.findAll();
		}),
	);
}
