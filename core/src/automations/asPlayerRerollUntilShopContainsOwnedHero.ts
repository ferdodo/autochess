import type { TestContext } from "../types/TestContext.js";
import { getGame } from "../utils/getGame.js";
import { asPlayerReroll } from "./asPlayerReroll.js";
import { goToNextPlanningPhase } from "./goToNextPlanningPhase.js";

export async function asPlayerRerollUntilShopContainsOwnedHero(
	testContext: TestContext,
): Promise<void> {
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	let game = await getGame(testContext, 0);
	let bench = game.playerBenches[publicKey] || {};

	let shop =
		game.playerShops[publicKey].filter((product) => product !== null) || [];

	let benchAppellations = [...Object.values(bench)].map(
		(hero) => hero.appellation,
	);

	while (!shop.some((product) => benchAppellations.includes(product))) {
		if (game.playerMoney[publicKey] > 7) {
			await asPlayerReroll(testContext);
		} else {
			await goToNextPlanningPhase(testContext);
		}

		game = await getGame(testContext, 0);
		bench = game.playerBenches[publicKey] || {};

		shop =
			game.playerShops[publicKey].filter((product) => product !== null) || [];

		benchAppellations = [...Object.values(bench)].map(
			(hero) => hero.appellation,
		);
	}
}
