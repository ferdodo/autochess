import { asNewPlayerConnect } from "../automations/as-new-player-connect.js";
import { asPlayerInitiateGame } from "../automations/as-player-initiate-game.js";
import type { TestContext } from "../types/test-context.js";
import { withServerStarted } from "./with-server-started.js";

export async function withEightPlayerGameStarted(): Promise<TestContext> {
	const testContext = withServerStarted();
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);

	await Promise.all([
		asPlayerInitiateGame(testContext, 0),
		asPlayerInitiateGame(testContext, 1),
		asPlayerInitiateGame(testContext, 2),
		asPlayerInitiateGame(testContext, 3),
		asPlayerInitiateGame(testContext, 4),
		asPlayerInitiateGame(testContext, 5),
		asPlayerInitiateGame(testContext, 6),
		asPlayerInitiateGame(testContext, 7),
		new Promise((resolve) =>
			setTimeout(() => {
				testContext.skipMatchmakeLateDebounce();
				resolve(undefined);
			}, 1),
		),
	]);

	return testContext;
}
