import { reroll } from "../api/reroll";
import type { TestContext } from "../types/test-context";
import { firstValueFrom, map, filter } from "rxjs";
import { observeGame } from "../api/observe-game";
import { getRerollCost } from "../utils/get-reroll-cost";

export async function asPlayerReroll(
	testContext: TestContext,
	playerNumber = 0,
) {
	const frontContext = testContext.frontContexts[playerNumber];

	if (!frontContext) {
		throw new Error(`Player ${playerNumber} not found !`);
	}

	const moneyBefore = await firstValueFrom(
		observeGame(frontContext).pipe(
			map((game) => game.playerMoney[frontContext.publicKey]),
		),
	);

	if (moneyBefore < getRerollCost()) {
		return;
	}

	await reroll(frontContext);

	await firstValueFrom(
		observeGame(frontContext).pipe(
			map((game) => game.playerMoney[frontContext.publicKey]),
			filter((money) => money !== moneyBefore),
		),
	);
}
