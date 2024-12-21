import type { Game } from "core/types/game.js";
import { BackEvent } from "../types/back-events.js";
import { GameEntity } from "../entities/game.js";
import type { MikroORM } from "@mikro-orm/core";
import type { Bus } from "../types/pub-sub.js";

export async function updateGame(
	orm: MikroORM,
	bus: Bus,
	game: Game,
): Promise<boolean> {
	const em = orm.em.fork();
	const gameRepository = em.getRepository(GameEntity);
	const playsig = game.playsig;

	if (!playsig) {
		return false;
	}

	const affected = await gameRepository.nativeUpdate({ playsig }, game);

	if (affected) {
		bus.publish(BackEvent.GameUpdate, game.playsig);
	}

	return Boolean(affected);
}
