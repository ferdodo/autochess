import { withGameOverWithP1Advantage } from "../fixtures/with-game-over-with-p1-advantage.js";
import { withGameOver } from "../fixtures/with-game-over.js";
import { test, expect } from "vitest";

test("on game over, players should have rankings", async () => {
	const testContext = await withGameOver();
	const publicKey = testContext.frontContexts[0].publicKey || "Error";

	const ranking =
		await testContext.backContext.dataMapper.readRanking(publicKey);

	expect(ranking.elo).toBeTruthy();
	expect(ranking.elo).not.toEqual(1000);
	await new Promise((resolve) => setTimeout(resolve, 1));
});

test("Player that win should have the best elo", async () => {
	const testContext = await withGameOverWithP1Advantage();
	const p1 = testContext.frontContexts[0];
	const p2 = testContext.frontContexts[1];

	const p1Ranking = await testContext.backContext.dataMapper.readRanking(
		p1.publicKey,
	);

	const p2Ranking = await testContext.backContext.dataMapper.readRanking(
		p2.publicKey,
	);

	expect(p1Ranking.elo).toBeGreaterThan(p2Ranking.elo);
	expect(p1Ranking.elo).toBeGreaterThan(1000);
	expect(p2Ranking.elo).toBeLessThan(1000);
	await new Promise((resolve) => setTimeout(resolve, 1));
});
