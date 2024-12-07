import type { Queuer } from "core/types/queuer";
import type { Collection } from "mongodb";
import type { QueuerRepository } from "../repositories/queuer-repository";
import { Observable, share } from "rxjs";

export function observeQueuers(
	queuerCollection: Collection<Queuer>,
	queuerRepository: QueuerRepository,
): Observable<Queuer[]> {
	return new Observable<Queuer[]>((subscriber) => {
		const changeStream = queuerCollection.watch();

		changeStream.on("change", async () => {
			const queuers = await queuerRepository.find();
			subscriber.next(queuers);
		});

		return () => {
			changeStream.close();
		};
	}).pipe(share());
}
