import type { Observable } from "rxjs";
import type { Game } from "core/types/game.js";
import type { Playsig } from "core/types/playsig.js";
import { filter, mergeMap } from "rxjs/operators";
import { BackEvent } from "../types/back-events.js";
import type { MikroORM } from "@mikro-orm/core";
import { GameEntity } from "../entities/game.js";
import type { Bus } from "../types/pub-sub.js";

export function observeGame(
	orm: MikroORM,
	bus: Bus,
	playsig: Playsig,
): Observable<Game> {
	return bus.events$.pipe(
		filter(
			([message, content]) =>
				message === BackEvent.GameUpdate && content === playsig,
		),
		mergeMap(async () => {
			const em = orm.em.fork();
			const gameRepository = em.getRepository(GameEntity);
			const game = await gameRepository.findOneOrFail({ playsig });
			return game;
		}),
	);
}
