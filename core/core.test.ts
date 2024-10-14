import { test, expect } from "vitest";
import { withTwoPlayerGameStarted } from "./fixtures/with-two-player-game-started";
import { observeGame } from "./api/observe-game";
import { firstValueFrom } from "rxjs";
import { asPlayerReroll } from "./automations/as-player-reroll";

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

test("Reroll should swap the shop items with random hero from pool", async () => {
	const testContext = await withTwoPlayerGameStarted();
	const frontContext = testContext.frontContexts[0];
	const game = await firstValueFrom(observeGame(frontContext));
	const pool = await testContext.backContext.dataMapper.readPool(game.playsig);

	if (!pool) {
		throw new Error("Pool not found !");
	}

	const countByAppellationBefore = [
		...game.playerShops[frontContext.publicKey],
		...pool.heroes,
	].reduce(
		(acc, appellation) => {
			acc[appellation] = (acc[appellation] || 0) + 1;
			return acc;
		},
		{} as Record<string, number>,
	);

	await asPlayerReroll(testContext, 0);

	const gameAfter = await firstValueFrom(
		observeGame(testContext.frontContexts[0]),
	);

	const poolAfter = await testContext.backContext.dataMapper.readPool(
		game.playsig,
	);

	if (!poolAfter) {
		throw new Error("Pool not found !");
	}

	const countByAppellationAfter = [
		...gameAfter.playerShops[frontContext.publicKey],
		...poolAfter.heroes,
	].reduce(
		(acc, appellation) => {
			acc[appellation] = (acc[appellation] || 0) + 1;
			return acc;
		},
		{} as Record<string, number>,
	);

	expect(countByAppellationAfter).toEqual(countByAppellationBefore);

	expect(gameAfter.playerShops[frontContext.publicKey]).not.toEqual(
		game.playerShops[frontContext.publicKey],
	);
});
