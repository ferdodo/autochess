import type { Pool } from "core/types/pool";
import { getPoolRepository } from "../repositories/pool-repository";
import type { MikroORM } from "@mikro-orm/core";

export async function createPool(orm: MikroORM, pool: Pool): Promise<boolean> {
	const em = orm.em.fork();
	const poolRepository = getPoolRepository(em);
	await poolRepository.create(pool);
	await em.flush();
	return true;
}
