import { goToNextPhase } from "../automations/go-to-next-phase.js";
import type { TestContext } from "../types/test-context.js";
import { getGame } from "../utils/get-game.js";
import { isGameInProgress } from "../utils/is-game-in-progress.js";
import { withTwoPlayerGameStarted } from "./with-two-player-game-started.js";

export async function withGameOver(): Promise<TestContext> {
	const testContext = await withTwoPlayerGameStarted();

	while (isGameInProgress(await getGame(testContext))) {
		await goToNextPhase(testContext);
	}

	return testContext;
}
