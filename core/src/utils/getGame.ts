import type { TestContext } from "../types/TestContext.js";
import type { Game } from "../types/Game.js";

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
