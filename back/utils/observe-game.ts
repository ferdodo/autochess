import type { Observable } from "rxjs";
import type { Game } from "core/types/game.js";
import type { Playsig } from "core/types/playsig.js";
import { filter, mergeMap, tap } from "rxjs/operators";
import { BackEvent } from "../types/back-events.js";
import type { MikroORM } from "@mikro-orm/core";
import { GameEntity } from "../entities/game.js";
import type { Bus } from "../types/pub-sub.js";
import { Subject, identity, timer } from "rxjs";
import { debounceTime, groupBy, share } from "rxjs/operators";

export function observeGame(
	orm: MikroORM,
	bus: Bus,
): (playsig: Playsig) => Observable<Game> {
	const subscribedGames$ = new Subject<Playsig>();

	const queryResults$: Observable<Game> = subscribedGames$.pipe(
		groupBy(identity, {
			duration: () => timer(60000),
		}),
		mergeMap((group$) => group$.pipe(debounceTime(10))),
		mergeMap((playsig: Playsig) => {
			const em = orm.em.fork();
			const gameRepository = em.getRepository(GameEntity);
			return gameRepository.findOneOrFail({ playsig });
		}),
		share(),
	);

	return (playsig) => {
		return bus.events$.pipe(
			filter(
				([message, content]) =>
					message === BackEvent.GameUpdate && content === playsig,
			),
			tap(() => subscribedGames$.next(playsig)),
			mergeMap(() => queryResults$),
			filter((game) => game.playsig === playsig),
		);
	};
}
