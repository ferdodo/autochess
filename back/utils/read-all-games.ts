import type { Game } from "core/types/game";
import { GameEntity } from "../entities/game";
import type { MikroORM } from "@mikro-orm/core";

export async function readAllGames(orm: MikroORM): Promise<Game[]> {
	const em = orm.em.fork();
	const gameRepository = em.getRepository(GameEntity);
	const games = await gameRepository.findAll();
	return games;
}
