import { asPlayerLevelUp } from "../automations/asPlayerLevelUp.js";
import { goToNextPlanningPhase } from "../automations/goToNextPlanningPhase.js";
import type { TestContext } from "../types/TestContext.js";
import { withOneBoughtHero } from "./withOneBoughtHero.js";

export async function withOneBoughtHeroAndLevelTwo(): Promise<TestContext> {
	const testContext = await withOneBoughtHero();
	await goToNextPlanningPhase(testContext);
	await asPlayerLevelUp(testContext);
	return testContext;
}
