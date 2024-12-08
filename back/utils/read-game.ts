import type { Game } from "core/types/game";
import { getGameRepository } from "../repositories/game-repository";
import type { Playsig } from "core/types/playsig";
import type { MikroORM } from "@mikro-orm/core";

export async function readGame(
	orm: MikroORM,
	playsig: Playsig,
): Promise<Game | undefined> {
	const em = orm.em.fork();
	const gameRepository = getGameRepository(em);
	const game = await gameRepository.findOne({ playsig });
	return game;
}
