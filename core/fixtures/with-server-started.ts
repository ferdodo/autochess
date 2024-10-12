import { createGameAndQueuerDataMapperMock } from "../mocks/create-game-and-queuer-data-mapper-mock";
import type { BackContext } from "../types/back-context";
import { ConnectionMockFactory } from "../mocks/connection-mock-factory";
import { startServer } from "../utils/start-server";
import type { TestContext } from "../types/test-context";
import { createPoolDataMapperMock } from "../mocks/create-pool-data-mapper-mock";

export function withServerStarted(): TestContext {
	const [gameDataMapper, queuerDataMapper] =
		createGameAndQueuerDataMapperMock();

	const connectionMockFactory = new ConnectionMockFactory();
	const poolDataMapper = createPoolDataMapperMock(gameDataMapper);

	const backContext: BackContext = {
		connections$: connectionMockFactory.createServer(),
		isValidSignature: () => Promise.resolve(true),
		gameDataMapper,
		queuerDataMapper,
		poolDataMapper,
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
