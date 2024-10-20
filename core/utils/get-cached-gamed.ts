import type { FrontContext } from "../types/front-context";
import type { CachedGame } from "../types/cached-game";
import { observeGame } from "../api/observe-game";
import { firstValueFrom } from "rxjs";

export async function getCachedGame(
	context: FrontContext,
): Promise<CachedGame> {
	if (!context.cachedGame) {
		context.cachedGame = await firstValueFrom(observeGame(context));
	}

	const soon = new Date(Date.now() + 20000).toISOString();

	if (soon > context.cachedGame.expiresAt) {
		context.cachedGame = await firstValueFrom(observeGame(context));
	}

	return context.cachedGame;
}
