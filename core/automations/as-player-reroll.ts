import { reroll } from "../api/reroll.js";
import type { TestContext } from "../types/test-context.js";
import { firstValueFrom, map, filter } from "rxjs";
import { observeGame } from "../api/observe-game.js";
import { getRerollCost } from "../utils/get-reroll-cost.js";

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

	const waitReroll = firstValueFrom(
		observeGame(frontContext).pipe(
			map((game) => game.playerMoney[frontContext.publicKey]),
			filter((money) => money !== moneyBefore),
		),
	);

	await reroll(frontContext);

	await waitReroll;
}
