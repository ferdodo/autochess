import { QueuerEntity } from "../entities/queuer.js";
import type { Queuer } from "core/types/queuer.js";
import type { MikroORM } from "@mikro-orm/core";

export async function readQueuers(orm: MikroORM): Promise<Queuer[]> {
	const em = orm.em.fork();
	const queuerRepository = em.getRepository(QueuerEntity);
	return await queuerRepository.findAll();
}
