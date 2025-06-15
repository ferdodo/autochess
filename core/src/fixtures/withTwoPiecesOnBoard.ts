import type { TestContext } from "../types/TestContext.js";
import { withOneBoughtHero } from "./withOneBoughtHero.js";
import { asPlayerTransposeBenchToBoard } from "../automations/asPlayerTransposeBenchToBoard.js";
import { asPlayerLevelUp } from "../automations/asPlayerLevelUp.js";
import { goToNextPlanningPhase } from "../automations/goToNextPlanningPhase.js";

export async function withTwoPiecesOnBoard(): Promise<TestContext> {
	const testContext = await withOneBoughtHero();
	await goToNextPlanningPhase(testContext);
	await asPlayerLevelUp(testContext);

	await asPlayerTransposeBenchToBoard(testContext, 0, {
		positionX: 1,
		positionY: 0,
	});

	return testContext;
}
