import type { TestContext } from "../types/test-context.js";
import { getGame } from "../utils/get-game.js";
import { Phase } from "../types/phase.js";
import { goToNextPhase } from "./go-to-next-phase.js";

export async function goToNextPlanningPhase(
	testContext: TestContext,
	playerIndex = 0,
) {
	const frontContext = testContext.frontContexts[playerIndex];

	if (!frontContext) {
		throw new Error(`Player ${playerIndex} not found !`);
	}

	if (!frontContext.playsig) {
		throw new Error(`Player ${playerIndex} has not initiated the game !`);
	}

	let game = await getGame(testContext);

	do {
		await goToNextPhase(testContext);
		game = await getGame(testContext);
	} while (game?.phase !== Phase.Planning);
}
