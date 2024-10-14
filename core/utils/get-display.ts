import type { TestContext } from "../types/test-context";
import { firstValueFrom } from "rxjs";
import { portray } from "./portray";
import { observeGame } from "../api/observe-game";
import type { Display } from "../types/display";

export async function getDisplay(
	testContext: TestContext,
	playerNumber = 0,
): Promise<Display> {
	const frontContext = testContext.frontContexts[playerNumber];

	if (!frontContext) {
		throw new Error(`Player ${playerNumber} not found !`);
	}

	const display = await firstValueFrom(
		observeGame(frontContext).pipe(portray(frontContext.publicKey)),
	);

	return display;
}
