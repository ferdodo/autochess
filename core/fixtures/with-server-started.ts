import { createGameAndQueuerDataMapperMock } from "../mocks/create-game-and-queuer-data-mapper-mock";
import type { BackContext } from "../types/back-context";
import { ConnectionMockFactory } from "../mocks/connection-mock-factory";
import { startServer } from "../utils/start-server";
import type { TestContext } from "../types/test-context";

export function withServerStarted(): TestContext {
	const [gameDataMapper, queuerDataMapper] =
		createGameAndQueuerDataMapperMock();

	const connectionMockFactory = new ConnectionMockFactory();

	const backContext: BackContext = {
		connections$: connectionMockFactory.createServer(),
		isValidSignature: () => Promise.resolve(true),
		gameDataMapper,
		queuerDataMapper,
		queuerConnections: {},
		skipMatchMakeDebounce: false,
	};

	startServer(backContext);

	return {
		connectionMockFactory,
		backContext,
		frontContexts: {},
	};
}
