import type { Queuer } from "core/types/queuer.js";
import type { Collection } from "mongodb";
import { QueuerEntity } from "../entities/queuer.js";
import { Observable, share } from "rxjs";
import type { MikroORM } from "@mikro-orm/core";
import { mongoDeserialize } from "./mongo-deserialize.js";
import type { MongoDeserialized } from "../types/mongo-deserialized.js";
import type { MongoSerialized } from "../types/mongo-serialized.js";

export function observeQueuers(
	orm: MikroORM,
	queuerCollection: Collection<MongoSerialized<Queuer>>,
): Observable<MongoDeserialized<Queuer>[]> {
	const em = orm.em.fork();
	const queuerRepository = em.getRepository(QueuerEntity);

	return new Observable<MongoDeserialized<Queuer>[]>((subscriber) => {
		const changeStream = queuerCollection.watch();

		changeStream.on("change", async () => {
			const queuers = await queuerRepository.findAll();
			subscriber.next(queuers.map(mongoDeserialize));
		});

		return () => {
			changeStream.close();
		};
	}).pipe(share());
}
