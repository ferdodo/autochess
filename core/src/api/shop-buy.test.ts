import { test, expect } from "vitest";
import { asPlayerTransposeBoardToBoard } from "../automations/asPlayerTransposeBoardToBoard.js";
import { getGame } from "../utils/getGame.js";
import { asPlayerShopBuy } from "../automations/asPlayerShopBuy.js";
import { withP1HavingTwentyFiveGolds } from "../fixtures/withP1HavingTwentyFiveGolds.js";

test("Buying from shop should fill the first available slot", async () => {
	const testContext = await withP1HavingTwentyFiveGolds();
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
	const testContext = await withP1HavingTwentyFiveGolds();
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
