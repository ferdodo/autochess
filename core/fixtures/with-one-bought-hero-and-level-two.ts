import { asPlayerLevelUp } from "../automations/as-player-level-up.js";
import { goToNextPlanningPhase } from "../automations/go-to-next-planning-phase.js";
import type { TestContext } from "../types/test-context.js";
import { withOneBoughtHero } from "./with-one-bought-hero.js";

export async function withOneBoughtHeroAndLevelTwo(): Promise<TestContext> {
	const testContext = await withOneBoughtHero();
	await goToNextPlanningPhase(testContext);
	await asPlayerLevelUp(testContext);
	return testContext;
}
