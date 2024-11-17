import { startServer } from "../utils/start-server";
import type { TestContext } from "../types/test-context";
import { createTestContext } from "../utils/create-test-context";

export function withServerStarted(): TestContext {
	const testContext = createTestContext();
	startServer(testContext.backContext);
	return testContext;
}
