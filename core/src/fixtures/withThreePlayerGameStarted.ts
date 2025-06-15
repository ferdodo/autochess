import { asNewPlayerConnect } from "../automations/asNewPlayerConnect.js";
import { asPlayerInitiateGame } from "../automations/asPlayerInitiateGame.js";
import type { TestContext } from "../types/TestContext.js";
import { withServerStarted } from "./withServerStarted.js";

export async function withThreePlayerGameStarted(): Promise<TestContext> {
	const testContext = withServerStarted();
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);

	await Promise.all([
		asPlayerInitiateGame(testContext, 0),
		asPlayerInitiateGame(testContext, 1),
		asPlayerInitiateGame(testContext, 2),

		new Promise((resolve) =>
			setTimeout(() => {
				testContext.skipMatchmakeLateDebounce();
				resolve(undefined);
			}, 1),
		),
	]);

	return testContext;
}
