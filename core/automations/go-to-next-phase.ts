import type { TestContext } from "../types/test-context";
import { firstValueFrom, map, filter } from "rxjs";
import { portray } from "../utils/portray";
import { observeGame } from "../api/observe-game";
import { getDisplay } from "../utils/get-display";

export async function goToNextPhase(testContext: TestContext) {
	const frontContext = testContext.frontContexts[0];
	const initialDisplay = await getDisplay(testContext);

	if (!frontContext) {
		throw new Error("Player 0 not found !");
	}

	const whenNextPhase = firstValueFrom(
		observeGame(frontContext).pipe(
			map(({ game }) => game),
			portray(frontContext.publicKey),
			filter((display) => display.phase !== initialDisplay.phase),
		),
	);

	console.log(Date.now() % 1000, "trigger round timer");
	testContext.triggerRoundTimer();
	const result = await whenNextPhase;
}
