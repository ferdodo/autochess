import type { BackContext } from "core/types/back-context";
import type { ConnectionMockFactory } from "core/mocks/connection-mock-factory";
import { createDataMapperMock } from "core/mocks/create-data-mapper-mock";
import { debounceTime, interval, map, share } from "rxjs";

export function createOfflineBackContext(
	connectionMockFactory: ConnectionMockFactory,
): BackContext {
	return {
		connections$: connectionMockFactory.createServer(),
		isValidSignature: () => Promise.resolve(true),
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
		roundTimer: interval(25000).pipe(
			map(() => undefined),
			share(),
		),
		queuerConnections: {},
	};
}
