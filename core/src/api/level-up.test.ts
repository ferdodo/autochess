import { test, expect } from "vitest";
import { withTwoPlayerGameStarted } from "../fixtures/withTwoPlayerGameStarted.js";
import { getGame } from "../utils/getGame.js";
import { asPlayerLevelUp } from "../automations/asPlayerLevelUp.js";
import { withP1HavingTwentyFiveGolds } from "../fixtures/withP1HavingTwentyFiveGolds.js";
import { levelSchema } from "../schemas/levelSchema.js";
import { withP1LowOnMoney } from "../fixtures/withP1LowOnMoney.js";

test("Leveling up should cost money", async () => {
	const testContext = await withTwoPlayerGameStarted();
	const gameBefore = await getGame(testContext, 0);
	const publicKey = testContext.frontContexts[0].publicKey;
	const moneyBefore = gameBefore.playerMoney[publicKey];
	await asPlayerLevelUp(testContext, 0);
	const gameAfter = await getGame(testContext, 0);
	const moneyAfter = gameAfter.playerMoney[publicKey];
	expect(moneyAfter).toBeLessThan(moneyBefore);
});

test("Should not be possible to level up more than the maximum", async () => {
	const testContext = await withP1HavingTwentyFiveGolds();
	const gameBefore = await getGame(testContext, 0);
	const publicKey = testContext.frontContexts[0].publicKey;

	let level = gameBefore.playerLevel[publicKey];

	while (level < levelSchema.maximum) {
		await asPlayerLevelUp(testContext, 0);
		const game = await getGame(testContext, 0);
		level = game.playerLevel[publicKey];
	}

	await asPlayerLevelUp(testContext, 0);
	const gameAfter = await getGame(testContext, 0);
	const levelAfter = gameAfter.playerLevel[publicKey];
	expect(levelAfter).toBe(levelSchema.maximum);
});

test("Should not level up when not enough money", async () => {
	const testContext = await withP1LowOnMoney();
	const gameBefore = await getGame(testContext, 0);
	const publicKey = testContext.frontContexts[0].publicKey;
	const moneyBefore = gameBefore.playerMoney[publicKey];
	const levelBefore = gameBefore.playerLevel[publicKey];
	await asPlayerLevelUp(testContext, 0);
	const gameAfter = await getGame(testContext, 0);
	const moneyAfter = gameAfter.playerMoney[publicKey];
	const levelAfter = gameAfter.playerLevel[publicKey];
	expect(moneyAfter).toBe(moneyBefore);
	expect(levelAfter).toBe(levelBefore);
});
