import { QueuerEntity } from "../entities/queuer.js";
import type { Queuer } from "core/src/types/Queuer.js";
import type { MikroORM } from "@mikro-orm/core";
import { BackEvent } from "../types/back-events.js";
import type { Bus } from "../types/pub-sub.js";

export async function createQueuer(
	orm: MikroORM,
	bus: Bus,
	queuer: Queuer,
): Promise<boolean> {
	const em = orm.em.fork();
	const queuerRepository = em.getRepository(QueuerEntity);
	await queuerRepository.create(queuer);
	await em.flush();
	bus.publish(BackEvent.QueuerJoin, "");
	return true;
}
