import { asNewPlayerConnect } from "../automations/asNewPlayerConnect.js";
import { asPlayerInitiateGame } from "../automations/asPlayerInitiateGame.js";
import type { TestContext } from "../types/TestContext.js";
import { withServerStarted } from "./withServerStarted.js";

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
