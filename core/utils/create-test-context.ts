import type { BackContext } from "../types/back-context.js";
import { ConnectionMockFactory } from "../mocks/connection-mock-factory.js";
import type { TestContext } from "../types/test-context.js";
import { createDataMapperMock } from "../mocks/create-data-mapper-mock.js";
import { Subject, withLatestFrom, map, tap, share } from "rxjs";
import type { Queuer } from "../types/queuer.js";
import type { Observable } from "rxjs";
import type { Game } from "../types/game.js";
import { createRandomPublicKey } from "../mocks/create-random-public-key.js";
import { createMetrics } from "./create-metrics.js";

export function createTestContext(): TestContext {
	const dataMapper = createDataMapperMock();
	const connectionMockFactory = new ConnectionMockFactory();
	const lateMatchMakeDebounceSubject = new Subject<void>();
	const roundTimerSubject = new Subject<void>();
	const serverPublicKey = createRandomPublicKey();

	const backContext: BackContext = {
		connections$: connectionMockFactory.createServer(),
		isValidSignature: () => Promise.resolve(true),
		serverPublicKey,
		signMessage: async (message) => ({
			...message,
			publicKey: serverPublicKey,
			signature: "ccccccccccc",
			issuedAt: new Date().toISOString(),
			expiresAt: new Date(Date.now() + 60000).toISOString(),
		}),
		lateMatchmakingTimer: (source: Observable<Queuer[]>) =>
			lateMatchMakeDebounceSubject.pipe(
				withLatestFrom(source),
				map(([_, value]) => value),
			),
		dataMapper,
		queuerConnections: {},
		roundTimer: (source: Observable<Game>) => {
			return roundTimerSubject.pipe(
				withLatestFrom(source),
				map(([_, value]) => value),
				share(),
			);
		},
		testingTimeOffset: 0,
		metrics: createMetrics(),
	};

	return {
		connectionMockFactory,
		backContext,
		frontContexts: {},
		skipMatchmakeLateDebounce: () => lateMatchMakeDebounceSubject.next(),
		triggerRoundTimer: () => {
			roundTimerSubject.next();
		},
	};
}
