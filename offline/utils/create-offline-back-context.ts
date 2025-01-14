import type { BackContext } from "core/types/back-context";
import type { ConnectionMockFactory } from "core/mocks/connection-mock-factory";
import { createDataMapperMock } from "core/mocks/create-data-mapper-mock";
import { debounceTime } from "rxjs";
import { createRoundTimer } from "core/utils/create-round-timer";

export function createOfflineBackContext(
	connectionMockFactory: ConnectionMockFactory,
): BackContext {
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
		dataMapper: createDataMapperMock(),
		lateMatchmakingTimer: (source) => source.pipe(debounceTime(10)),
		roundTimer: createRoundTimer(),
		queuerConnections: {},
		testingTimeOffset: 0,
	};
}
