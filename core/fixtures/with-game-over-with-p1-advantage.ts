import { asPlayerLevelUp } from "../automations/as-player-level-up.js";
import { asPlayerShopBuy } from "../automations/as-player-shop-buy.js";
import { asPlayerTransposeBenchToBoard } from "../automations/as-player-transpose-bench-to-board.js";
import { goToNextPhase } from "../automations/go-to-next-phase.js";
import { goToNextPlanningPhase } from "../automations/go-to-next-planning-phase.js";
import type { TestContext } from "../types/test-context.js";
import { getGame } from "../utils/get-game.js";
import { isGameInProgress } from "../utils/is-game-in-progress.js";
import { withTwoPlayerGameStarted } from "./with-two-player-game-started.js";

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
