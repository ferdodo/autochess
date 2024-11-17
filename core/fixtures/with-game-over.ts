import { goToNextPhase } from "../automations/go-to-next-phase";
import type { TestContext } from "../types/test-context";
import { getGame } from "../utils/get-game";
import { isGameInProgress } from "../utils/is-game-in-progress";
import { withTwoPlayerGameStarted } from "./with-two-player-game-started";

export async function withGameOver(): Promise<TestContext> {
	const testContext = await withTwoPlayerGameStarted();
	const game = await getGame(testContext);

	while (isGameInProgress(await getGame(testContext))) {
		await goToNextPhase(testContext);
	}

	return testContext;
}
