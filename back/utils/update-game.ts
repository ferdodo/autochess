import type { Game } from "core/types/game";
import { GameEntity } from "../entities/game.js";
import type { MikroORM } from "@mikro-orm/core";

export async function updateGame(orm: MikroORM, game: Game): Promise<boolean> {
	const em = orm.em.fork();
	const gameRepository = em.getRepository(GameEntity);
	const playsig = game.playsig;

	if (!playsig) {
		return false;
	}

	const affected = await gameRepository.nativeUpdate({ playsig }, game);
	return Boolean(affected);
}
