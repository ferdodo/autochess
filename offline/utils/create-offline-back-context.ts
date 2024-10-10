import type { BackContext } from "core/types/back-context";
import type { ConnectionMockFactory } from "core/mocks/connection-mock-factory";
import { createGameAndQueuerDataMapperMock } from "core/mocks/create-game-and-queuer-data-mapper-mock";

export function createOfflineBackContext(
	connectionMockFactory: ConnectionMockFactory,
): BackContext {
	const [gameDataMapper, queuerDataMapper] =
		createGameAndQueuerDataMapperMock();

	return {
		connections$: connectionMockFactory.createServer(),
		isValidSignature: () => Promise.resolve(true),
		gameDataMapper,
		queuerDataMapper,
		queuerConnections: {},
		config: {
			skipMatchMakeDebounce: false,
		},
	};
}
