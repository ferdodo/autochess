import type { FrontContext } from "../types/front-context";
import type { TestContext } from "../types/test-context";

export function asNewPlayerConnect(testContext: TestContext) {
	const [connection] = testContext.connectionMockFactory.createClient();
	const playersCount = Object.keys(testContext.frontContexts).length;

	const numberToLetter = (n: number) =>
		n >= 1 && n <= 26 ? String.fromCharCode(n + 64) : n;

	const frontContext: FrontContext = {
		connection,
		publicKey: `${playersCount}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
		nickname: `Player${numberToLetter(playersCount + 1)}`,
		signMessage: async (message) => {
			return {
				...message,
				timestamp: Date.now(),
				signature: `${playersCount}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
			};
		},
	};

	testContext.frontContexts[playersCount] = frontContext;
}
