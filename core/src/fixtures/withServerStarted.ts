import { startServer } from "../utils/startServer.js";
import type { TestContext } from "../types/TestContext.js";
import { createTestContext } from "../utils/createTestContext.js";
import type { DataMapper } from "../types/DataMapper.js";

export function withServerStarted(dataMapper?: DataMapper): TestContext {
	const testContext = createTestContext();

	if (dataMapper) {
		testContext.backContext.dataMapper = dataMapper;
	}

	startServer(testContext.backContext).subscribe();
	return testContext;
}
