import type { Game } from "core/types/game.js";
import { GameEntity } from "../entities/game.js";
import type { Playsig } from "core/types/playsig.js";
import type { Pool } from "core/types/pool.js";
import type { MikroORM } from "@mikro-orm/core";
import { PoolEntity } from "../entities/pool.js";
import { BackEvent } from "../types/back-events.js";
import type { Bus } from "../types/pub-sub.js";
import { LockMode } from "@mikro-orm/core";
import type { Metrics } from "core/types/metrics.js";

export async function readAndUpdatePoolWithGame(
	orm: MikroORM,
	bus: Bus,
	metrics: Metrics,
	playsig: Playsig,
) {
	const em = orm.em.fork();
	await em.begin();
	metrics.transactionBeginCount++;
	const gameRepository = em.getRepository(GameEntity);
	const poolRepository = em.getRepository(PoolEntity);

	const game = await gameRepository.findOneOrFail(
		{ playsig },
		{ lockMode: LockMode.PESSIMISTIC_WRITE },
	);

	const pool = await poolRepository.findOneOrFail(
		{ playsig },
		{ lockMode: LockMode.PESSIMISTIC_WRITE },
	);

	async function commit(pool: Pool, game: Game) {
		const affected = await gameRepository.nativeUpdate({ playsig }, game);
		const affectedPool = await poolRepository.nativeUpdate({ playsig }, pool);
		await em.flush();
		await em.commit();
		bus.publish(BackEvent.GameUpdate, playsig);
		metrics.transactionEndCount++;
		return Boolean(affected && affectedPool);
	}

	async function abort() {
		await em.rollback();
		metrics.transactionEndCount++;
	}

	return { game, pool, commit, abort };
}
