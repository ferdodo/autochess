import type { Observable } from "rxjs";
import type { Game } from "core/types/game.js";
import { filter, mergeMap } from "rxjs/operators";
import { BackEvent } from "../types/back-events.js";
import { GameEntity } from "../entities/game.js";
import type { MikroORM } from "@mikro-orm/core";
import type { Bus } from "../types/pub-sub.js";

export function observeCreatedGame(orm: MikroORM, bus: Bus): Observable<Game> {
	return bus.events$.pipe(
		filter(([message]) => message === BackEvent.GameCreate),
		mergeMap(async ([_, playsig]) => {
			const em = orm.em.fork();
			const gameRepository = em.getRepository(GameEntity);
			const game = await gameRepository.findOne({ playsig });
			return game || undefined;
		}),
		filter(Boolean),
	);
}
