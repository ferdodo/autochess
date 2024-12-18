import type { Game } from "core/types/game.js";
import { GameEntity } from "../entities/game.js";
import type { Playsig } from "core/types/playsig.js";
import type { MikroORM } from "@mikro-orm/core";
import type { MongoDeserialized } from "../types/mongo-deserialized.js";
import { mongoDeserialize } from "./mongo-deserialize.js";

export async function readAndUpdateGame(orm: MikroORM, playsig: Playsig) {
	const em = orm.em.fork();
	await em.begin();
	const gameRepository = em.getRepository(GameEntity);
	const _game = await gameRepository.findOneOrFail({ playsig });
	const game: MongoDeserialized<Game> = mongoDeserialize(_game);

	async function commit(game: Game) {
		const affected = await gameRepository.nativeUpdate({ playsig }, game);
		await em.flush();
		await em.commit();
		return Boolean(affected);
	}

	async function abort() {
		await em.rollback();
	}

	return { game, commit, abort };
}
