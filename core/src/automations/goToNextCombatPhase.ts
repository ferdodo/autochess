import type { TestContext } from "../types/TestContext.js";
import { getGame } from "../utils/getGame.js";
import { Phase } from "../types/Phase.js";
import { goToNextPhase } from "./goToNextPhase.js";

export async function goToNextCombatPhase(
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
	} while (game?.phase !== Phase.Combat);
}
