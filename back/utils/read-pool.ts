import type { Pool } from "core/types/pool.js";
import type { Playsig } from "core/types/playsig.js";
import type { MikroORM } from "@mikro-orm/core";
import { PoolEntity } from "../entities/pool.js";

export async function readPool(
	orm: MikroORM,
	playsig: Playsig,
): Promise<Pool | null> {
	const em = orm.em.fork();
	const poolRepository = em.getRepository(PoolEntity);
	return (await poolRepository.findOne({ playsig })) || undefined;
}
