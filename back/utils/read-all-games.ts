import type { Game } from "core/types/game.js";
import { GameEntity } from "../entities/game.js";
import type { MikroORM } from "@mikro-orm/core";
import { mongoDeserialize } from "./mongo-deserialize.js";
import type { MongoDeserialized } from "../types/mongo-deserialized.js";

export async function readAllGames(
	orm: MikroORM,
): Promise<MongoDeserialized<Game>[]> {
	const em = orm.em.fork();
	const gameRepository = em.getRepository(GameEntity);
	const games = await gameRepository.findAll();
	return games.map(mongoDeserialize);
}
