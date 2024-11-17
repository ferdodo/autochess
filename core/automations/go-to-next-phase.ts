import type { TestContext } from "../types/test-context";
import { firstValueFrom, map, filter } from "rxjs";
import { portray } from "../utils/portray";
import { observeGame } from "../api/observe-game";
import { getDisplay } from "../utils/get-display";

export async function goToNextPhase(testContext: TestContext, playerIndex = 0) {
	const frontContext = testContext.frontContexts[playerIndex];
	const initialDisplay = await getDisplay(testContext);

	if (!frontContext) {
		throw new Error(`Player ${playerIndex} not found !`);
	}

	const whenNextPhase = firstValueFrom(
		observeGame(frontContext).pipe(
			map(({ game }) => game),
			portray(frontContext.publicKey),
			filter((display) => display.phase !== initialDisplay.phase),
		),
	);

	testContext.triggerRoundTimer();
	await whenNextPhase;
}
