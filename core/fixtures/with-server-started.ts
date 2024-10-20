import type { BackContext } from "../types/back-context";
import { ConnectionMockFactory } from "../mocks/connection-mock-factory";
import { startServer } from "../utils/start-server";
import type { TestContext } from "../types/test-context";
import { createDataMapperMock } from "../mocks/create-data-mapper-mock";

export function withServerStarted(): TestContext {
	const dataMapper = createDataMapperMock();
	const connectionMockFactory = new ConnectionMockFactory();

	const backContext: BackContext = {
		connections$: connectionMockFactory.createServer(),
		isValidSignature: () => Promise.resolve(true),
		signMessage: async (message) => ({
			...message,
			publicKey: "Back public key",
			signature: "signature",
			issuedAt: new Date().toISOString(),
			expiresAt: new Date(Date.now() + 60000).toISOString(),
		}),
		dataMapper,
		queuerConnections: {},
		config: {
			skipMatchMakeDebounce: false,
		},
	};

	startServer(backContext);

	return {
		connectionMockFactory,
		backContext,
		frontContexts: {},
	};
}
