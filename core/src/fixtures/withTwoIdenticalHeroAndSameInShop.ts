import type { TestContext } from "../types/TestContext.js";
import { withP1HavingTwentyFiveGolds } from "./withP1HavingTwentyFiveGolds.js";
import { getGame } from "../utils/getGame.js";
import { asPlayerShopBuy } from "../automations/asPlayerShopBuy.js";
import { asPlayerLevelUp } from "../automations/asPlayerLevelUp.js";
import { findIdenticalHeroesWithSameGrade } from "../utils/findIdenticalHeroesWithSameGrade.js";

export async function withTwoIdenticalHeroAndSameInShop(): Promise<TestContext> {
	const testContext = await withP1HavingTwentyFiveGolds();
	const publicKey = testContext.frontContexts[0].publicKey || "Error";

	while (true) {
		const game = await getGame(testContext, 0);
		const bench = game.playerBenches[publicKey] || {};
		const shop = game.playerShops[publicKey] || [];

		const benchSize = Object.values(bench).filter(Boolean).length;

		if (benchSize >= 6) {
			await asPlayerLevelUp(testContext, 0);
			continue;
		}

		const twoIdentical = findIdenticalHeroesWithSameGrade(game, publicKey);
		const heroAppellation = twoIdentical?.[0].appellation;

		if (heroAppellation && shop.includes(heroAppellation)) {
			return testContext;
		}

		await asPlayerShopBuy(testContext, 0);
	}
}
