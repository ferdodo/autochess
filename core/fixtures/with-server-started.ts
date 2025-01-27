import { startServer } from "../utils/start-server.js";
import type { TestContext } from "../types/test-context.js";
import { createTestContext } from "../utils/create-test-context.js";
import type { DataMapper } from "../types/data-mapper.js";

export function withServerStarted(dataMapper?: DataMapper): TestContext {
	const testContext = createTestContext();

	if (dataMapper) {
		testContext.backContext.dataMapper = dataMapper;
	}

	startServer(testContext.backContext).subscribe();
	return testContext;
}
