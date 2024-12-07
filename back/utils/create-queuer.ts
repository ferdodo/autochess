import type { QueuerRepository } from "../repositories/queuer-repository";
import type { Queuer } from "core/types/queuer";

export async function createQueuer(
	queuerRepository: QueuerRepository,
	queuer: Queuer,
): Promise<boolean> {
	try {
		await queuerRepository.create(queuer);
		return true;
	} catch (error) {
		return false;
	}
}
