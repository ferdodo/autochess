import { asPlayerShopBuy } from "../automations/asPlayerShopBuy.js";
import type { TestContext } from "../types/TestContext.js";
import { withTwoPlayerGameStarted } from "./withTwoPlayerGameStarted.js";

export async function withOneBoughtHero(): Promise<TestContext> {
	const testContext = await withTwoPlayerGameStarted();
	await asPlayerShopBuy(testContext);
	return testContext;
}
