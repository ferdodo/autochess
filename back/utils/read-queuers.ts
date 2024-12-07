import type { QueuerRepository } from "../repositories/queuer-repository";
import type { Queuer } from "core/types/queuer";

export async function readQueuers(
	queuerRepository: QueuerRepository,
): Promise<Queuer[]> {
	const repositories = await queuerRepository.find();
	return repositories;
}
