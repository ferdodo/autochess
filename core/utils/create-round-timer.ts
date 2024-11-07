import { switchMap, distinctUntilKeyChanged, map } from "rxjs/operators";
import { timer } from "rxjs";
import type { Game } from "../types/game";
import type { MonoTypeOperatorFunction } from "rxjs";

export function createRoundTimer(): MonoTypeOperatorFunction<Game> {
	return (source) => {
		return source.pipe(
			distinctUntilKeyChanged("phase"),
			switchMap((game) => timer(25000).pipe(map(() => game))),
		);
	};
}
