import type { Queuer } from "core/types/queuer";
import type { Collection } from "mongodb";
import { QueuerEntity } from "../entities/queuer";
import { Observable, share } from "rxjs";
import type { MikroORM } from "@mikro-orm/core";

export function observeQueuers(
	orm: MikroORM,
	queuerCollection: Collection<Queuer>,
): Observable<Queuer[]> {
	const em = orm.em.fork();
	const queuerRepository = em.getRepository(QueuerEntity);

	return new Observable<Queuer[]>((subscriber) => {
		const changeStream = queuerCollection.watch();

		changeStream.on("change", async () => {
			const queuers = await queuerRepository.findAll();
			subscriber.next(queuers);
		});

		return () => {
			changeStream.close();
		};
	}).pipe(share());
}
