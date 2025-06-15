import { withGameOverWithP1AdvantageAgainstBot } from "../fixtures/withGameOverWithP1AdvantageAgainstBot.js";
import { test, expect } from "vitest";

test("Bot should win against advantaged player", async () => {
	const testContext = await withGameOverWithP1AdvantageAgainstBot();
	const p1 = testContext.frontContexts[0];
	const p2 = testContext.frontContexts[1];

	const p1Ranking = await testContext.backContext.dataMapper.readRanking(
		p1.publicKey,
	);
	const p2Ranking = await testContext.backContext.dataMapper.readRanking(
		p2.publicKey,
	);

	expect(p2Ranking.elo).toBeGreaterThan(p1Ranking.elo);
	expect(p2Ranking.elo).toBeGreaterThan(1000);
	expect(p1Ranking.elo).toBeLessThan(1000);
	await new Promise((resolve) => setTimeout(resolve, 1));
});
