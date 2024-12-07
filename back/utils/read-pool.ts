import type { Pool } from "core/types/pool";
import type { PoolRepository } from "../repositories/pool-repository";
import type { Playsig } from "core/types/playsig";

export async function readPool(
	poolRepository: PoolRepository,
	playsig: Playsig,
): Promise<Pool | null> {
	const pool = await poolRepository.findOne({
		where: { playsig },
	});

	return pool;
}
