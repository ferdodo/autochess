import type { BackContext } from "./back-context";
import type { ConnectionMockFactory } from "./../mocks/connection-mock-factory";
import type { FrontContext } from "./front-context";

export interface TestContext {
	connectionMockFactory: ConnectionMockFactory;
	backContext: BackContext;
	skipMatchmakeLateDebounce: () => void;
	frontContexts: Record<number, FrontContext>;
}
