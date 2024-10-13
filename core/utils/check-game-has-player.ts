import type { OperatorFunction } from "rxjs";
import { mergeMap, filter, map } from "rxjs/operators";
import type { GameScoped } from "../types/game-scoped";
import type { DataMapper } from "../types/data-mapper";

export function checkGameHasPlayer<T>({
	readGame,
}: DataMapper): OperatorFunction<T & GameScoped, T & GameScoped> {
	return (source) =>
		source.pipe(
			mergeMap(async (message) => {
				const game = await readGame(message.playsig);
				const gameHasPlayer = !!game?.publicKeys.includes(message.publicKey);
				return { gameHasPlayer, message };
			}),
			filter(({ gameHasPlayer }) => gameHasPlayer),
			map(({ message }) => message),
		);
}
