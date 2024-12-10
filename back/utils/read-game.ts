import type { Game } from "core/types/game";
import { GameEntity } from "../entities/game.js";
import type { Playsig } from "core/types/playsig";
import type { MikroORM } from "@mikro-orm/core";
import { mongoDeserialize } from "./mongo-deserialize.js";
import type { MongoDeserialized } from "../types/mongo-deserialized.js";

export async function readGame(
	orm: MikroORM,
	playsig: Playsig,
): Promise<MongoDeserialized<Game> | undefined> {
	const em = orm.em.fork();
	const gameRepository = em.getRepository(GameEntity);
	const game = await gameRepository.findOne({ playsig });
	return game ? mongoDeserialize(game) : undefined;
}
