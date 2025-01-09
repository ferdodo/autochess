import { test, expect } from "vitest";
import { asPlayerTransposeBoardToBoard } from "../automations/as-player-transpose-board-to-board.js";
import { getGame } from "../utils/get-game.js";
import { asPlayerShopBuy } from "../automations/as-player-shop-buy.js";
import { withP1HavingTwentyGolds } from "../fixtures/with-p1-having-twenty-golds.js";

test("Buying from shop should fill the first available slot", async () => {
	const testContext = await withP1HavingTwentyGolds();
	await asPlayerShopBuy(testContext);
	await asPlayerShopBuy(testContext);
	await asPlayerTransposeBoardToBoard(testContext);
	await asPlayerShopBuy(testContext);
	const game = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	const bench = game.playerBenches[publicKey];
	expect(bench[0]).toBeTruthy();
});

test("Should not exceed the maximum size of the bench", async () => {
	const testContext = await withP1HavingTwentyGolds();
	await asPlayerShopBuy(testContext);
	await asPlayerShopBuy(testContext);
	await asPlayerShopBuy(testContext);
	await asPlayerShopBuy(testContext);
	await asPlayerShopBuy(testContext);
	await asPlayerShopBuy(testContext);
	await asPlayerShopBuy(testContext);
	const game = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	const bench = game.playerBenches[publicKey] || {};
	const benchSize = Object.values(bench).filter(Boolean).length;
	expect(benchSize).toEqual(6);
});
