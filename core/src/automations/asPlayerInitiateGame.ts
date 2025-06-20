import { initiateGame } from "../api/initiateGame.js";
import type { TestContext } from "../types/TestContext.js";

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
