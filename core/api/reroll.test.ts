import { test, expect } from "vitest";
import { withTwoPlayerGameStarted } from "../fixtures/with-two-player-game-started";
import { asPlayerReroll } from "../automations/as-player-reroll";
import { getDisplay } from "../utils/get-display";

test("Reroll should swap the shop items with random hero from pool", async () => {
	const testContext = await withTwoPlayerGameStarted();
	const display = await getDisplay(testContext);
	const playsig = testContext.frontContexts[0].playsig || "Error";
	const pool = await testContext.backContext.dataMapper.readPool(playsig);
	await asPlayerReroll(testContext);
	const displayAfter = await getDisplay(testContext);
	const poolAfter = await testContext.backContext.dataMapper.readPool(playsig);
	expect(displayAfter.shop).not.toEqual(display.shop);
	expect(poolAfter?.heroes).not.toEqual(pool?.heroes);
	expect(pool?.heroes).toBeTruthy();
	const merged = [...displayAfter.shop, ...(poolAfter?.heroes || [])].sort();
	const mergedAfter = [...display.shop, ...(pool?.heroes || [])].sort();
	expect(merged).toEqual(mergedAfter);
});
