import type { BackContext } from "core/types/back-context";
import type { ConnectionMockFactory } from "core/mocks/connection-mock-factory";
import { createDataMapperMock } from "core/mocks/create-data-mapper-mock";

export function createOfflineBackContext(
	connectionMockFactory: ConnectionMockFactory,
): BackContext {
	return {
		connections$: connectionMockFactory.createServer(),
		isValidSignature: () => Promise.resolve(true),
		dataMapper: createDataMapperMock(),
		queuerConnections: {},
		config: {
			skipMatchMakeDebounce: false,
		},
	};
}
