import { goToNextPhase } from "../automations/go-to-next-phase.js";
import type { TestContext } from "../types/test-context.js";
import { withTwoPlayerGameStarted } from "./with-two-player-game-started.js";

export async function withTwoPlayersInCombat(): Promise<TestContext> {
	const testContext = await withTwoPlayerGameStarted();
	await goToNextPhase(testContext);
	return testContext;
}
