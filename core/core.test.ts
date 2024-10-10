import { test, expect } from "vitest";
import { withTwoPlayerGameStarted } from "./fixtures/with-two-player-game-started";
import { observeGame } from "./api/observe-game";
import { firstValueFrom } from "rxjs";

test("lib", async () => {
	const testContext = await withTwoPlayerGameStarted();
	const frontContext1 = testContext.frontContexts[0];
	const frontContext2 = testContext.frontContexts[1];

	if (!frontContext1 || !frontContext2) {
		throw new Error("Front contexts not found !");
	}

	const game1$ = observeGame(frontContext1);
	const game2$ = observeGame(frontContext2);

	const game1 = await firstValueFrom(game1$);
	const game2 = await firstValueFrom(game2$);
	expect(game1).toBeTruthy();
	expect(game2).toBeTruthy();
});
