import type { PublicKey } from "core/types/public-key.js";
import { BackEvent } from "../types/back-events.js";
import type { MikroORM } from "@mikro-orm/core";
import { QueuerEntity } from "../entities/queuer.js";
import type { Bus } from "../types/pub-sub.js";

export async function deleteQueuer(
	orm: MikroORM,
	bus: Bus,
	publicKey: PublicKey,
): Promise<boolean> {
	try {
		const em = orm.em.fork();
		const queuerRepository = em.getRepository(QueuerEntity);
		await queuerRepository.nativeDelete({ publicKey });
		await em.flush();
		bus.publish(BackEvent.QueuerLeave, "");
		return true;
	} catch (_e) {
		return false;
	}
}
