import { goToNextPhase } from "../automations/go-to-next-phase";
import type { TestContext } from "../types/test-context";
import { getGame } from "../utils/get-game";
import { isGameInProgress } from "../utils/is-game-in-progress";
import { withTwoPlayerGameStarted } from "./with-two-player-game-started";

export async function withGameOver(): Promise<TestContext> {
	const testContext = await withTwoPlayerGameStarted();
	const game = await getGame(testContext);

	testContext.backContext.dataMapper
		.observeGame(game.playsig)
		.subscribe((game) => {
			console.log(Date.now() % 1000, "game.phase", game.phase);
		});

	while (isGameInProgress(await getGame(testContext))) {
		await goToNextPhase(testContext);
		console.log(Date.now() % 1000, ">>> next phase ");
	}

	return testContext;
}
