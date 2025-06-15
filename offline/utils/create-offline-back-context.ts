import type { BackContext } from "core/src/types/BackContext";
import type { ConnectionMockFactory } from "core/src/mocks/ConnectionMockFactory";
import { createDataMapperMock } from "core/src/mocks/createDataMapperMock";
import { debounceTime } from "rxjs";
import { createRoundTimer } from "core/src/utils/createRoundTimer";
import { createMetrics } from "core/src/utils/createMetrics";

export function createOfflineBackContext(
	connectionMockFactory: ConnectionMockFactory,
): BackContext {
	const metrics = createMetrics();

	return {
		connections$: connectionMockFactory.createServer(),
		isValidSignature: () => Promise.resolve(true),
		serverPublicKey:
			"aaaaaaaaaa00000000000000000000000000000000000000000000000000000000",
		signMessage: async (message) => ({
			...message,
			publicKey:
				"cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
			signature:
				"cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
			issuedAt: new Date().toISOString(),
			expiresAt: new Date(Date.now() + 60000).toISOString(),
		}),
		dataMapper: createDataMapperMock(metrics),
		lateMatchmakingTimer: (source) => source.pipe(debounceTime(10)),
		roundTimer: createRoundTimer(),
		queuerConnections: {},
		testingTimeOffset: 0,
		metrics,
	};
}
