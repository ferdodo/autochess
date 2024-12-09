import { asPlayerShopBuy } from "../automations/as-player-shop-buy.js";
import type { TestContext } from "../types/test-context.js";
import { withTwoPlayerGameStarted } from "./with-two-player-game-started.js";

export async function withOneBoughtHero(): Promise<TestContext> {
	const testContext = await withTwoPlayerGameStarted();
	await asPlayerShopBuy(testContext);
	return testContext;
}
