import type { TestContext } from "../types/test-context";
import { firstValueFrom, filter } from "rxjs";

export async function goToNextPhase(testContext: TestContext, playerIndex = 0) {
	const frontContext = testContext.frontContexts[playerIndex];

	if (!frontContext) {
		throw new Error(`Player ${playerIndex} not found !`);
	}

	if (!frontContext.playsig) {
		throw new Error(`Player ${playerIndex} has not initiated the game !`);
	}

	const initialGame = await testContext.backContext.dataMapper.readGame(
		frontContext.playsig,
	);

	if (!initialGame) {
		throw new Error("Game not found !");
	}

	const whenNextPhase = firstValueFrom(
		testContext.backContext.dataMapper
			.observeGame(frontContext.playsig)
			.pipe(filter((game) => game.phase !== initialGame.phase)),
	);

	testContext.triggerRoundTimer();
	await whenNextPhase;
}
