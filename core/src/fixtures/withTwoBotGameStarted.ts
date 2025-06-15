import { asNewPlayerConnect } from "../automations/asNewPlayerConnect.js";
import type { TestContext } from "../types/TestContext.js";
import { connectBot } from "../utils/connectBot.js";
import { withServerStarted } from "./withServerStarted.js";

export async function withTwoBotGameStarted(): Promise<TestContext> {
	const testContext = withServerStarted();
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);

	await Promise.all([
		connectBot(testContext.frontContexts[0]),
		connectBot(testContext.frontContexts[1]),
		new Promise((resolve) =>
			setTimeout(() => {
				testContext.skipMatchmakeLateDebounce();
				resolve(undefined);
			}, 1),
		),
	]);

	return testContext;
}
