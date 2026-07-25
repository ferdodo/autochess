import type { TestContext } from "../types/TestContext.js";
import { getGame } from "../utils/getGame.js";
import { asPlayerShopBuy } from "../automations/asPlayerShopBuy.js";
import { asPlayerReroll } from "../automations/asPlayerReroll.js";
import { goToNextPlanningPhase } from "./goToNextPlanningPhase.js";

export async function asPlayerShopSameHeroTwice(
	testContext: TestContext,
): Promise<void> {
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	await asPlayerShopBuy(testContext);
	let game = await getGame(testContext);
	const bench = game.playerBenches[publicKey] || {};
	const hero = bench[0];

	let shop =
		game.playerShops[publicKey].filter((product) => product !== null) || [];

	while (!shop.includes(hero.appellation)) {
		if (game.playerMoney[publicKey] > 7) {
			await asPlayerReroll(testContext);
		} else {
			await goToNextPlanningPhase(testContext);
		}

		game = await getGame(testContext);

		shop =
			game.playerShops[publicKey].filter((product) => product !== null) || [];
	}

	const shopIndex = shop.findIndex((product) => product === hero.appellation);
	await asPlayerShopBuy(testContext, 0, shopIndex);
}
