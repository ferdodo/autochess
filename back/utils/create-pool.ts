import type { Pool } from "core/types/pool";
import type { PoolRepository } from "../repositories/pool-repository";

export async function createPool(
	poolRepository: PoolRepository,
	pool: Pool,
): Promise<boolean> {
	try {
		await poolRepository.create(pool);
		return true;
	} catch (e) {
		return false;
	}
}
