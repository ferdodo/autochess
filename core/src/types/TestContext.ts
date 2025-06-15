import type { BackContext } from "./BackContext.js";
import type { ConnectionMockFactory } from "../mocks/ConnectionMockFactory.js";
import type { FrontContext } from "./FrontContext.js";

export interface TestContext {
	connectionMockFactory: ConnectionMockFactory;
	backContext: BackContext;
	skipMatchmakeLateDebounce: () => void;
	triggerRoundTimer: () => void;
	frontContexts: Record<number, FrontContext>;
	closeConnection: Record<number, () => void>;
}
