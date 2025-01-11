import { asNewPlayerConnect } from "../automations/as-new-player-connect.js";
import type { TestContext } from "../types/test-context.js";
import { connectBot } from "../utils/connect-bot.js";
import { withServerStarted } from "./with-server-started.js";

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
