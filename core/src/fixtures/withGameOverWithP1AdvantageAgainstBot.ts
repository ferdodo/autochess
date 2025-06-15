import { firstValueFrom, filter, timeout } from "rxjs";
import { withServerStarted } from "./withServerStarted.js";
import { asNewPlayerConnect } from "../automations/asNewPlayerConnect.js";
import { asPlayerInitiateGame } from "../automations/asPlayerInitiateGame.js";
import { connectBot } from "../utils/connectBot.js";
import { goToNextPlanningPhase } from "../automations/goToNextPlanningPhase.js";
import { asPlayerShopBuy } from "../automations/asPlayerShopBuy.js";
import { asPlayerLevelUp } from "../automations/asPlayerLevelUp.js";
import { asPlayerTransposeBenchToBoard } from "../automations/asPlayerTransposeBenchToBoard.js";
import { goToNextPhase } from "../automations/goToNextPhase.js";
import { observeGame } from "../api/observeGame.js";
import { isBotOutOfMoves } from "../utils/isBotOutOfMoves.js";
import { isGameInProgress } from "../utils/isGameInProgress.js";
import { getGame } from "../utils/getGame.js";
import type { TestContext } from "../types/TestContext.js";

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

	await goToNextPlanningPhase(testContext);
	await asPlayerShopBuy(testContext);
	await asPlayerLevelUp(testContext);
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
			filter((game) => isBotOutOfMoves(game, frontContext.publicKey)),
			timeout(1000),
		),
	);

	while (isGameInProgress(await getGame(testContext))) {
		await goToNextPhase(testContext);
	}

	return testContext;
}
