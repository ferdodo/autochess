import { switchMap, map } from "rxjs/operators";
import { timer } from "rxjs";
import type { Game } from "../types/game.js";
import type { MonoTypeOperatorFunction } from "rxjs";
import { getPhaseDuration } from "./get-phase-duration.js";

export function createRoundTimer(): MonoTypeOperatorFunction<Game> {
	return (source) => {
		return source.pipe(
			switchMap((game) =>
				timer(getPhaseDuration(game.phase)).pipe(map(() => game)),
			),
		);
	};
}
