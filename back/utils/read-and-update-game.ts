import type { Game } from "core/types/game";
import { getGameRepository } from "../repositories/game-repository";
import type { Playsig } from "core/types/playsig";
import type { MikroORM } from "@mikro-orm/core";

export async function readAndUpdateGame(orm: MikroORM, playsig: Playsig) {
	const em = orm.em.fork();
	await em.begin();
	const gameRepository = getGameRepository(em);
	const game = await gameRepository.findOneOrFail({ playsig });

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
