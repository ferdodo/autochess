import { observeGame } from "../api/observe-game.js";
import { asNewPlayerConnect } from "../automations/as-new-player-connect.js";
import { asPlayerInitiateGame } from "../automations/as-player-initiate-game.js";
import { asPlayerShopBuy } from "../automations/as-player-shop-buy.js";
import { asPlayerTransposeBenchToBoard } from "../automations/as-player-transpose-bench-to-board.js";
import { goToNextPhase } from "../automations/go-to-next-phase.js";
import type { TestContext } from "../types/test-context.js";
import { connectBot } from "../utils/connect-bot.js";
import { getGame } from "../utils/get-game.js";
import { isGameInProgress } from "../utils/is-game-in-progress.js";
import { withServerStarted } from "./with-server-started.js";
import { firstValueFrom, filter, timeout } from "rxjs";

export async function withGameOverWithP1AdvantageAgainstBot(): Promise<TestContext> {
	const testContext = withServerStarted();
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);

	await Promise.all([
		asPlayerInitiateGame(testContext, 0),
		connectBot(testContext.frontContexts[1]),
		new Promise((resolve) =>
			setTimeout(() => {
				testContext.skipMatchmakeLateDebounce();
				resolve(undefined);
			}, 1),
		),
	]);

	await asPlayerShopBuy(testContext);
	await asPlayerTransposeBenchToBoard(testContext);

	const frontContext = testContext.frontContexts[1];

	if (!frontContext) {
		throw new Error("Front context not found !");
	}

	await goToNextPhase(testContext);
	await goToNextPhase(testContext);
	await goToNextPhase(testContext);
	await goToNextPhase(testContext);

	await firstValueFrom(
		observeGame(frontContext).pipe(
			filter((game) => {
				return (
					game.playerMoney[frontContext.publicKey] < 3 &&
					Object.values(game.playerBenches[frontContext.publicKey]).filter(
						Boolean,
					).length === 0
				);
			}),
			timeout(1000),
		),
	);

	while (isGameInProgress(await getGame(testContext))) {
		await goToNextPhase(testContext);
	}

	return testContext;
}