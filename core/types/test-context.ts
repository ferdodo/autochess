import type { BackContext } from "./back-context.js";
import type { ConnectionMockFactory } from "../mocks/connection-mock-factory.js";
import type { FrontContext } from "./front-context.js";

export interface TestContext {
	connectionMockFactory: ConnectionMockFactory;
	backContext: BackContext;
	skipMatchmakeLateDebounce: () => void;
	triggerRoundTimer: () => void;
	frontContexts: Record<number, FrontContext>;
}
