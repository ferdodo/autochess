import { initiateGame } from "../api/initiate-game.js";
import type { TestContext } from "../types/test-context.js";

export async function asPlayerInitiateGame(
	testContext: TestContext,
	playerNumber: number,
) {
	const frontContext = testContext.frontContexts[playerNumber];

	if (!frontContext) {
		throw new Error(`Player ${playerNumber} not found !`);
	}

	const { playsig, stamp } = await initiateGame(frontContext);
	frontContext.playsig = playsig;
	frontContext.stamp = stamp;
}
