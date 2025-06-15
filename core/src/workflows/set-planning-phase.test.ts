import { test, expect } from "vitest";
import { withTwoPlayerGameStarted } from "../fixtures/withTwoPlayerGameStarted.js";
import { getGame } from "../utils/getGame.js";
import { goToNextPhase } from "../automations/goToNextPhase.js";
import { withGameOver } from "../fixtures/withGameOver.js";

test("Should reroll player shops when entering planning phase", async () => {
	const testContext = await withTwoPlayerGameStarted();
	const frontContext = testContext.frontContexts[0];

	if (!frontContext) {
		throw new Error("Front context not found !");
	}

	const initialGame = await getGame(testContext);
	let allShopsAreDifferent = false;

	while (!allShopsAreDifferent) {
		await goToNextPhase(testContext);
		const game = await getGame(testContext);
		const playerShops = game.playerShops;

		allShopsAreDifferent = Object.entries(playerShops).every(
			([publicKey, items]) =>
				items.some(
					(item, index) => item !== initialGame.playerShops[publicKey][index],
				),
		);
	}

	expect(testContext.backContext.metrics.transactionBeginCount).toEqual(
		testContext.backContext.metrics.transactionEndCount,
	);
});

test("Entering planning phase should add one gold to each players", async () => {
	const testContext = await withTwoPlayerGameStarted();
	const frontContext = testContext.frontContexts[0];

	if (!frontContext) {
		throw new Error("Front context not found !");
	}

	const initialGame = await getGame(testContext);
	await goToNextPhase(testContext);
	await goToNextPhase(testContext);
	const game = await getGame(testContext);

	expect(Object.values(game.playerMoney)).toEqual(
		Object.values(initialGame.playerMoney).map((money) => money + 1),
	);

	expect(testContext.backContext.metrics.transactionBeginCount).toEqual(
		testContext.backContext.metrics.transactionEndCount,
	);
});

test("playerLostAt should be set if player has no health points left", async () => {
	const testContext = await withGameOver();
	const game = await getGame(testContext);
	expect(Object.values(game.playerLostAt).length).toBe(1);

	expect(testContext.backContext.metrics.transactionBeginCount).toEqual(
		testContext.backContext.metrics.transactionEndCount,
	);
});
