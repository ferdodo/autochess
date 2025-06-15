import { goToNextPhase } from "../automations/goToNextPhase.js";
import type { TestContext } from "../types/TestContext.js";
import { getGame } from "../utils/getGame.js";
import { withTwoPlayerGameStarted } from "./withTwoPlayerGameStarted.js";
import { Phase } from "../types/Phase.js";

export async function withP1HavingTwentyFiveGolds(): Promise<TestContext> {
	const testContext = await withTwoPlayerGameStarted();
	let money = 0;
	let game = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";

	while (money < 25 || game.phase !== Phase.Planning) {
		await goToNextPhase(testContext);
		game = await getGame(testContext);
		money = game.playerMoney[publicKey] || 0;
	}

	return testContext;
}
