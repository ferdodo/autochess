import { goToNextPhase } from "../automations/go-to-next-phase.js";
import type { TestContext } from "../types/test-context.js";
import { getGame } from "../utils/get-game.js";
import { withTwoPlayerGameStarted } from "./with-two-player-game-started.js";
import { Phase } from "../types/phase.js";

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
