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
		const money = game.playerMoney[publicKey];

		if (money <= 2) {
			throw new Error("Player is missing money to buy without upgrading");
		}

		const shop = game.playerShops[publicKey] || [];
		const heroesToAquire = shop.filter((item) => item !== null);

		if (!heroesToAquire.length) {
			await asPlayerReroll(testContext, playerNumber);
			continue;
		}

		const allHeroes: Hero[] = [
			...Object.values(game.playerBenches[publicKey] || {}).filter(Boolean),
			...(game.playerHeroes[publicKey] || []),
		];

		for (const [i, product] of shop.entries()) {
			const countOfSameType = allHeroes.filter(
				(h) => h.appellation === product && h.grade === 0,
			).length;

			if (countOfSameType < 2) {
				foundGoodItem = true;
				await asPlayerShopBuy(testContext, playerNumber, i);
			}
		}
	}
}
