import type { Game } from "core/types/game.js";
import { GameEntity } from "../entities/game.js";
import type { Playsig } from "core/types/playsig.js";
import type { MikroORM } from "@mikro-orm/core";

export async function readGame(
	orm: MikroORM,
	playsig: Playsig,
): Promise<Game | undefined> {
	const em = orm.em.fork();
	const gameRepository = em.getRepository(GameEntity);
	return (await gameRepository.findOne({ playsig })) || undefined;
}
