import { goToNextPhase } from "../automations/goToNextPhase.js";
import type { TestContext } from "../types/TestContext.js";
import { withTwoPlayerGameStarted } from "./withTwoPlayerGameStarted.js";

export async function withTwoPlayersInCombat(): Promise<TestContext> {
	const testContext = await withTwoPlayerGameStarted();
	await goToNextPhase(testContext);
	return testContext;
}
