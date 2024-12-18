import { QueuerEntity } from "../entities/queuer.js";
import type { Queuer } from "core/types/queuer.js";
import type { MikroORM } from "@mikro-orm/core";
import { mongoSerialize } from "./mongo-serialize.js";

export async function createQueuer(
	orm: MikroORM,
	queuer: Queuer,
): Promise<boolean> {
	const em = orm.em.fork();
	const queuerRepository = em.getRepository(QueuerEntity);
	await queuerRepository.create(mongoSerialize(queuer));
	await em.flush();
	return true;
}
