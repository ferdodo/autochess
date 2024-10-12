import type { OperatorFunction } from "rxjs";
import { mergeMap, filter, map } from "rxjs/operators";
import type { GameDataMapper } from "../types/game-data-mapper";
import type { GameScoped } from "../types/game-scoped";

export function checkGameHasPlayer<T>(
	gameDataMapper: GameDataMapper,
): OperatorFunction<T & GameScoped, T & GameScoped> {
	return (source) =>
		source.pipe(
			mergeMap(async (message) => {
				const game = await gameDataMapper.read(message.playsig);
				const gameHasPlayer = !!game?.publicKeys.includes(message.publicKey);
				return { gameHasPlayer, message };
			}),
			filter(({ gameHasPlayer }) => gameHasPlayer),
			map(({ message }) => message),
		);
}
