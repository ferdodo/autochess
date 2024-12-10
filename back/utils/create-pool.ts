import type { Pool } from "core/types/pool";
import { PoolEntity } from "../entities/pool.js";
import type { MikroORM } from "@mikro-orm/core";
import { mongoSerialize } from "./mongo-serialize.js";

export async function createPool(orm: MikroORM, pool: Pool): Promise<boolean> {
	const em = orm.em.fork();
	const poolRepository = em.getRepository(PoolEntity);
	await poolRepository.create(mongoSerialize(pool));
	await em.flush();
	return true;
}
