import { QueuerEntity } from "../entities/queuer";
import type { Queuer } from "core/types/queuer";
import type { MikroORM } from "@mikro-orm/core";
import { uid } from "uid";

export async function createQueuer(
	orm: MikroORM,
	queuer: Queuer,
): Promise<boolean> {
	const em = orm.em.fork();
	const queuerRepository = em.getRepository(QueuerEntity);

	await queuerRepository.create({
		_id: uid(),
		...queuer,
	});

	await em.flush();
	return true;
}