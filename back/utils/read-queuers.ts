import { QueuerEntity } from "../entities/queuer.js";
import type { Queuer } from "core/types/queuer";
import type { MikroORM } from "@mikro-orm/core";

export async function readQueuers(orm: MikroORM): Promise<Queuer[]> {
	const em = orm.em.fork();
	const queuerRepository = em.getRepository(QueuerEntity);
	const queuers = await queuerRepository.findAll();
	return queuers.map(({ _id, ...queuer }) => queuer);
}
