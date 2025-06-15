import { Subject, withLatestFrom, map, tap, share } from "rxjs";
import type { Observable } from "rxjs";
import { createMetrics } from "./createMetrics.js";
import { createDataMapperMock } from "../mocks/createDataMapperMock.js";
import { ConnectionMockFactory } from "../mocks/ConnectionMockFactory.js";
import { createRandomPublicKey } from "../mocks/createRandomPublicKey.js";
import type { BackContext } from "../types/BackContext.js";
import type { TestContext } from "../types/TestContext.js";
import type { Queuer } from "../types/Queuer.js";
import type { Game } from "../types/Game.js";

export function createTestContext(): TestContext {
	const metrics = createMetrics();
	const dataMapper = createDataMapperMock(metrics);
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
		metrics,
	};

	return {
		connectionMockFactory,
		backContext,
		frontContexts: {},
		skipMatchmakeLateDebounce: () => lateMatchMakeDebounceSubject.next(),
		triggerRoundTimer: () => {
			roundTimerSubject.next();
		},
		closeConnection: {},
	};
}
