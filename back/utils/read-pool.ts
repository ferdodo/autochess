import type { Pool } from "core/types/pool";
import type { Playsig } from "core/types/playsig";
import type { MikroORM } from "@mikro-orm/core";
import { getPoolRepository } from "../repositories/pool-repository";

export async function readPool(
	orm: MikroORM,
	playsig: Playsig,
): Promise<Pool | null> {
	const em = orm.em.fork();
	const poolRepository = getPoolRepository(em);
	const pool = await poolRepository.findOne({ playsig });
	return pool;
}
