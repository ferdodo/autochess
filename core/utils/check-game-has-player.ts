import type { OperatorFunction } from "rxjs";
import { mergeMap, filter, map } from "rxjs/operators";
import type { GameScoped } from "../types/game-scoped";
import type { BackContext } from "../types/back-context";

export function checkGameHasPlayer<T>(
	context: BackContext,
): OperatorFunction<T & GameScoped, T & GameScoped> {
	return (source) =>
		source.pipe(
			mergeMap(async (message) => {
				const { cachedGame, publicKey } = message;
				const gameHasPlayer = !!cachedGame.game.publicKeys.includes(publicKey);
				const validCachedGame = await context.isValidSignature(cachedGame);
				return { gameHasPlayer, validCachedGame, message };
			}),
			filter(
				({ gameHasPlayer, validCachedGame }) =>
					gameHasPlayer && validCachedGame,
			),
			map(({ message }) => message),
		);
}
