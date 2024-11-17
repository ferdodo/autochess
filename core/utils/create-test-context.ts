import type { BackContext } from "../types/back-context";
import { ConnectionMockFactory } from "../mocks/connection-mock-factory";
import type { TestContext } from "../types/test-context";
import { createDataMapperMock } from "../mocks/create-data-mapper-mock";
import { Subject, withLatestFrom, map, tap, share } from "rxjs";
import type { Queuer } from "../types/queuer";
import type { Observable } from "rxjs";
import type { Game } from "../types/game";

export function createTestContext(): TestContext {
	const dataMapper = createDataMapperMock();
	const connectionMockFactory = new ConnectionMockFactory();
	const lateMatchMakeDebounceSubject = new Subject<void>();
	const roundTimerSubject = new Subject<void>();

	const backContext: BackContext = {
		connections$: connectionMockFactory.createServer(),
		isValidSignature: () => Promise.resolve(true),
		signMessage: async (message) => ({
			...message,
			publicKey:
				"cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
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
