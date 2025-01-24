import { createRandomPublicKey } from "../mocks/create-random-public-key.js";
import type { FrontContext } from "../types/front-context.js";
import type { TestContext } from "../types/test-context.js";

export function asNewPlayerConnect(testContext: TestContext) {
	const [connection, closeConnection] =
		testContext.connectionMockFactory.createClient();
	const playersCount = Object.keys(testContext.frontContexts).length;

	const numberToLetter = (n: number) =>
		n >= 1 && n <= 26 ? String.fromCharCode(n + 64) : n;

	const publicKey = createRandomPublicKey();

	const frontContext: FrontContext = {
		connection,
		publicKey,
		nickname: `Player${numberToLetter(playersCount + 1)}`,
		async signMessage(message) {
			return {
				...message,
				publicKey,
				issuedAt: new Date().toISOString(),
				expiresAt: new Date(Date.now() + 60 * 1000).toISOString(),
				signature: `${playersCount}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
			};
		},
	};

	testContext.frontContexts[playersCount] = frontContext;
	testContext.closeConnection[playersCount] = closeConnection;
}
