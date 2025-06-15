import { switchMap, map, distinctUntilKeyChanged } from "rxjs/operators";
import { timer } from "rxjs";
import type { Game } from "../types/Game.js";
import type { MonoTypeOperatorFunction } from "rxjs";
import { getPhaseDuration } from "./getPhaseDuration.js";

export function createRoundTimer(): MonoTypeOperatorFunction<Game> {
	return (source) => {
		return source.pipe(
			distinctUntilKeyChanged("phase"),
			switchMap((game) =>
				timer(getPhaseDuration(game.phase)).pipe(map(() => game)),
			),
		);
	};
}
