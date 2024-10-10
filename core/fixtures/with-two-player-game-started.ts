import { asNewPlayerConnect } from "../automations/as-new-player-connect";
import { asPlayerInitiateGame } from "../automations/as-player-initiate-game";
import type { TestContext } from "../types/test-context";
import { withServerStarted } from "./with-server-started";

export async function withTwoPlayerGameStarted(): Promise<TestContext> {
	const testContext = withServerStarted();
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);
	testContext.backContext.config.skipMatchMakeDebounce = true;

	await Promise.all([
		asPlayerInitiateGame(testContext, 0),
		asPlayerInitiateGame(testContext, 1),
	]);

	return testContext;
}
