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

	if (!frontContext.playsig) {
		throw new Error(`Player ${player} has not initiated the game !`);
	}

	const game = await testContext.backContext.dataMapper.readGame(
		frontContext.playsig,
	);

	if (!game) {
		throw new Error("Game not found !");
	}

	return game;
}
