import { asPlayerShopBuy } from "../automations/as-player-shop-buy";
import type { TestContext } from "../types/test-context";
import { withTwoPlayerGameStarted } from "./with-two-player-game-started";

export async function withOneBoughtHero(): Promise<TestContext> {
	const testContext = await withTwoPlayerGameStarted();
	await asPlayerShopBuy(testContext);
	return testContext;
}
