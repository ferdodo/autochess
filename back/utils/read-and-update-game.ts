import type { Game } from "core/types/game.js";
import { GameEntity } from "../entities/game.js";
import type { Playsig } from "core/types/playsig.js";
import type { MikroORM } from "@mikro-orm/core";
import { BackEvent } from "../types/back-events.js";
import type { Bus } from "../types/pub-sub.js";
import { LockMode } from "@mikro-orm/core";
import type { Metrics } from "core/types/metrics.js";

export async function readAndUpdateGame(
	orm: MikroORM,
	bus: Bus,
	metrics: Metrics,
	playsig: Playsig,
) {
	const em = orm.em.fork();
	await em.begin();
	metrics.transactionBeginCount++;
	const gameRepository = em.getRepository(GameEntity);

	const game = await gameRepository.findOneOrFail(
		{ playsig },
		{ lockMode: LockMode.PESSIMISTIC_WRITE },
	);

	async function commit(game: Game) {
		const affected = await gameRepository.nativeUpdate({ playsig }, game);
		await em.flush();
		await em.commit();
		metrics.transactionEndCount++;
		bus.publish(BackEvent.GameUpdate, playsig);
		return Boolean(affected);
	}

	async function abort() {
		await em.rollback();
		metrics.transactionEndCount++;
	}

	return { game, commit, abort };
}
