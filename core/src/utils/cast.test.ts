import { test } from "vitest";
import { cast } from "./cast.js";
import { withTwoPlayerGameStarted } from "../fixtures/withTwoPlayerGameStarted.js";
import { firstValueFrom, map, filter } from "rxjs";
import { observeGame } from "../api/observeGame.js";

test("cast a reroll", async () => {
	const testContext = await withTwoPlayerGameStarted();

	const frontContext = testContext.frontContexts[0];

	if (!frontContext) {
		throw new Error(`Player ${0} not found !`);
	}

	const moneyBefore = await firstValueFrom(
		observeGame(frontContext).pipe(
			map((game) => game.playerMoney[frontContext.publicKey]),
		),
	);

	await cast(frontContext, [{ reroll: true }]);

	await firstValueFrom(
		observeGame(frontContext).pipe(
			map((game) => game.playerMoney[frontContext.publicKey]),
			filter((money) => money !== moneyBefore),
		),
	);

	await new Promise((resolve) => setTimeout(resolve, 1));
});
