import { getQueuerRepository } from "../repositories/queuer-repository";
import type { Queuer } from "core/types/queuer";
import type { MikroORM } from "@mikro-orm/core";

export async function readQueuers(orm: MikroORM): Promise<Queuer[]> {
	const em = orm.em.fork();
	const queuerRepository = getQueuerRepository(em);
	const queuers = await queuerRepository.findAll();
	return queuers.map(({ _id, ...queuer }) => queuer);
}
