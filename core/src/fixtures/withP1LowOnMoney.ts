import type { TestContext } from "../types/TestContext.js";
import { getGame } from "../utils/getGame.js";
import { withTwoPlayerGameStarted } from "./withTwoPlayerGameStarted.js";
import { asPlayerLevelUp } from "../automations/asPlayerLevelUp.js";

export async function withP1LowOnMoney(): Promise<TestContext> {
	const testContext = await withTwoPlayerGameStarted();
	let game = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	let money = game.playerMoney[publicKey] || 0;

	while (money > 2) {
		await asPlayerLevelUp(testContext);
		game = await getGame(testContext);
		money = game.playerMoney[publicKey] || 0;
	}

	return testContext;
}
