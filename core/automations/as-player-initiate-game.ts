import { initiateGame } from "../api/initiate-game";
import type { TestContext } from "../types/test-context";

export async function asPlayerInitiateGame(
	testContext: TestContext,
	playerNumber: number,
) {
	const frontContext = testContext.frontContexts[playerNumber];

	if (!frontContext) {
		throw new Error(`Player ${playerNumber} not found !`);
	}

	await initiateGame(frontContext);
}
