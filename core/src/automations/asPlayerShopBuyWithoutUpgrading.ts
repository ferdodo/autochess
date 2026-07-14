import type { TestContext } from "../types/TestContext.js";
import type { Hero } from "../types/Hero.js";
import { getGame } from "../utils/getGame.js";
import { asPlayerShopBuy } from "./asPlayerShopBuy.js";
import { asPlayerReroll } from "./asPlayerReroll.js";

export async function asPlayerShopBuyWithoutUpgrading(
	testContext: TestContext,
	playerNumber = 0,
): Promise<void> {
	const publicKey =
		testContext.frontContexts[playerNumber].publicKey || "Error";

	let foundGoodItem = false;
	while (!foundGoodItem) {
		const game = await getGame(testContext, playerNumber);
		const shop = game.playerShops[publicKey] || [];
		const heroToAcquire = shop[0];

		if (!heroToAcquire) {
			await asPlayerReroll(testContext, playerNumber);
			continue;
		}

		const allHeroes: Hero[] = [
			...Object.values(game.playerBenches[publicKey] || {}).filter(Boolean),
			...(game.playerHeroes[publicKey] || []),
		];

		const countOfSameType = allHeroes.filter(
			(h) => h.appellation === heroToAcquire && h.grade === 0,
		).length;

		if (countOfSameType >= 2) {
			await asPlayerReroll(testContext, playerNumber);
		} else {
			foundGoodItem = true;
			await asPlayerShopBuy(testContext, playerNumber);
		}
	}
}
