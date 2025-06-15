import { asPlayerLevelUp } from "../automations/asPlayerLevelUp.js";
import { asPlayerShopBuy } from "../automations/asPlayerShopBuy.js";
import { asPlayerTransposeBenchToBoard } from "../automations/asPlayerTransposeBenchToBoard.js";
import { goToNextPhase } from "../automations/goToNextPhase.js";
import { goToNextPlanningPhase } from "../automations/goToNextPlanningPhase.js";
import type { TestContext } from "../types/TestContext.js";
import { getGame } from "../utils/getGame.js";
import { isGameInProgress } from "../utils/isGameInProgress.js";
import { withTwoPlayerGameStarted } from "./withTwoPlayerGameStarted.js";

export async function withGameOverWithP1Advantage(): Promise<TestContext> {
	const testContext = await withTwoPlayerGameStarted();
	await asPlayerShopBuy(testContext);
	await goToNextPlanningPhase(testContext);
	await asPlayerLevelUp(testContext);
	await asPlayerTransposeBenchToBoard(testContext);

	while (isGameInProgress(await getGame(testContext))) {
		await goToNextPhase(testContext);
	}

	return testContext;
}
