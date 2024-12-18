import { QueuerEntity } from "../entities/queuer.js";
import type { Queuer } from "core/types/queuer.js";
import type { MikroORM } from "@mikro-orm/core";
import { mongoDeserialize } from "./mongo-deserialize.js";
import type { MongoDeserialized } from "../types/mongo-deserialized.js";

export async function readQueuers(
	orm: MikroORM,
): Promise<MongoDeserialized<Queuer>[]> {
	const em = orm.em.fork();
	const queuerRepository = em.getRepository(QueuerEntity);
	const queuers = await queuerRepository.findAll();
	return queuers.map(mongoDeserialize);
}
