import { test, expect } from "vitest";
import { withTwoPlayerGameStarted } from "../fixtures/with-two-player-game-started";
import { asPlayerReroll } from "../automations/as-player-reroll";
import { getGame } from "../utils/get-game";
import { getGameShop } from "../utils/get-game-shop";

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
});
