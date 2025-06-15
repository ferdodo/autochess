import { test, expect } from "vitest";
import { withTwoPlayerGameStarted } from "../fixtures/withTwoPlayerGameStarted.js";
import { getGame } from "../utils/getGame.js";
import { getGameShop } from "../utils/getGameShop.js";
import { asPlayerReroll } from "../automations/asPlayerReroll.js";

test("Reroll should swap the shop items with random hero from pool", async () => {
	const testContext = await withTwoPlayerGameStarted();
	const game = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	const shop = getGameShop(game, publicKey);
	const playsig = testContext.frontContexts[0].playsig || "Error";
	const pool = await testContext.backContext.dataMapper.readPool(playsig);
	await asPlayerReroll(testContext);
	const gameAfter = await getGame(testContext);
	const shopAfter = getGameShop(gameAfter, publicKey);
	const poolAfter = await testContext.backContext.dataMapper.readPool(playsig);
	expect(shopAfter).not.toEqual(shop);
	expect(poolAfter?.heroes).not.toEqual(pool?.heroes);
	expect(pool?.heroes).toBeTruthy();
	const merged = [...shopAfter, ...(poolAfter?.heroes || [])].sort();
	const mergedAfter = [...shop, ...(pool?.heroes || [])].sort();
	expect(merged).toEqual(mergedAfter);
	await new Promise((resolve) => setTimeout(resolve, 1));
});

test("Reroll should should cost two golds", async () => {
	const testContext = await withTwoPlayerGameStarted();
	const game = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	const playerGoldBefore = game.playerMoney[publicKey];
	await asPlayerReroll(testContext);
	const gameAfter = await getGame(testContext);
	const playerGoldAfter = gameAfter.playerMoney[publicKey];
	expect(playerGoldAfter).toBe(playerGoldBefore - 2);
});
