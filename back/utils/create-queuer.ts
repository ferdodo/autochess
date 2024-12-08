import { getQueuerRepository } from "../repositories/queuer-repository";
import type { Queuer } from "core/types/queuer";
import type { MikroORM } from "@mikro-orm/core";

export async function createQueuer(
	orm: MikroORM,
	queuer: Queuer,
): Promise<boolean> {
	const em = orm.em.fork();
	const queuerRepository = getQueuerRepository(em);

	await queuerRepository.create({
		_id: Math.random().toString(),
		...queuer,
	});

	await em.flush();
	return true;
}
