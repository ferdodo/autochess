import type { TestContext } from "../types/TestContext.js";
import { withP1HavingTwentyFiveGolds } from "./withP1HavingTwentyFiveGolds.js";
import { asPlayerRerollUntilShopContainsOwnedHero } from "../automations/asPlayerRerollUntilShopContainsOwnedHero.js";
import { asPlayerShopSameHeroTwice } from "../automations/asPlayerShopSameHeroTwice.js";

export async function withTwoIdenticalHeroAndSameInShop(): Promise<TestContext> {
	const testContext = await withP1HavingTwentyFiveGolds();
	await asPlayerShopSameHeroTwice(testContext);
	await asPlayerRerollUntilShopContainsOwnedHero(testContext);
	return testContext;
}
