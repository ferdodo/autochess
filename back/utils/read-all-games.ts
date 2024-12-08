import type { Game } from "core/types/game";
import { getGameRepository } from "../repositories/game-repository";
import type { MikroORM } from "@mikro-orm/core";

export async function readAllGames(orm: MikroORM): Promise<Game[]> {
	const em = orm.em.fork();
	const gameRepository = getGameRepository(em);
	const games = await gameRepository.findAll();
	return games;
}
