import { QueuerEntity } from "../entities/queuer.js";
import type { MikroORM } from "@mikro-orm/core";
import type { PublicKey } from "core/types/public-key.js";

export async function deleteQueuer(
	orm: MikroORM,
	publicKey: PublicKey,
): Promise<boolean> {
	try {
		const em = orm.em.fork();
		const queuerRepository = em.getRepository(QueuerEntity);
		await queuerRepository.nativeDelete({ publicKey });
		await em.flush();
		return true;
	} catch (_e) {
		return false;
	}
}
