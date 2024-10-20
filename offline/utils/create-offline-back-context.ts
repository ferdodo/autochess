import type { BackContext } from "core/types/back-context";
import type { ConnectionMockFactory } from "core/mocks/connection-mock-factory";
import { createDataMapperMock } from "core/mocks/create-data-mapper-mock";

export function createOfflineBackContext(
	connectionMockFactory: ConnectionMockFactory,
): BackContext {
	return {
		connections$: connectionMockFactory.createServer(),
		isValidSignature: () => Promise.resolve(true),
		signMessage: async (message) => ({
			...message,
			signature: "signature",
			issuedAt: new Date().toISOString(),
			expiresAt: new Date(Date.now() + 60000).toISOString(),
		}),
		dataMapper: createDataMapperMock(),
		queuerConnections: {},
		config: {
			skipMatchMakeDebounce: false,
		},
	};
}
