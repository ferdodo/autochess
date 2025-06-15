import type { Game } from "core/src/types/Game.js";
import { GameEntity } from "../entities/game.js";
import type { Playsig } from "core/src/types/Playsig.js";
import type { MikroORM } from "@mikro-orm/core";

export async function readGame(
	orm: MikroORM,
	playsig: Playsig,
): Promise<Game | undefined> {
	const em = orm.em.fork();
	const gameRepository = em.getRepository(GameEntity);
	return (await gameRepository.findOne({ playsig })) || undefined;
}
