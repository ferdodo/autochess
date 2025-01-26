import type { TestContext } from "../types/test-context.js";
import { getGame } from "../utils/get-game.js";
import { withTwoPlayerGameStarted } from "./with-two-player-game-started.js";
import { asPlayerLevelUp } from "../automations/as-player-level-up.js";

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
