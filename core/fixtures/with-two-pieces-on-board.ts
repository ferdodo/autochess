import type { TestContext } from "../types/test-context.js";
import { withOneBoughtHero } from "./with-one-bought-hero.js";
import { asPlayerTransposeBenchToBoard } from "../automations/as-player-transpose-bench-to-board.js";
import { asPlayerLevelUp } from "../automations/as-player-level-up.js";
import { goToNextPlanningPhase } from "../automations/go-to-next-planning-phase.js";

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
