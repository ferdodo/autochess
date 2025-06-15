import { goToNextPhase } from "../automations/goToNextPhase.js";
import type { TestContext } from "../types/TestContext.js";
import { getGame } from "../utils/getGame.js";
import { isGameInProgress } from "../utils/isGameInProgress.js";
import { withTwoPlayerGameStarted } from "./withTwoPlayerGameStarted.js";

export async function withGameOver(): Promise<TestContext> {
	const testContext = await withTwoPlayerGameStarted();

	while (isGameInProgress(await getGame(testContext))) {
		await goToNextPhase(testContext);
	}

	return testContext;
}
