import { observeGame } from "../api/observe-game";
import type { TestContext } from "../types/test-context";
import { firstValueFrom } from "rxjs";
import type { Game } from "../types/game";

export async function getGame(
	testContext: TestContext,
	player = 0,
): Promise<Game> {
	const frontContext = testContext.frontContexts[player];

	if (!frontContext) {
		throw new Error(`Player ${player} not found !`);
	}

	const { game } = await firstValueFrom(observeGame(frontContext));
	return game;
}
