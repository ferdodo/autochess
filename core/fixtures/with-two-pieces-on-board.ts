import type { TestContext } from "../types/test-context.js";
import { withOneBoughtHero } from "./with-one-bought-hero.js";
import { asPlayerTransposeBenchToBoard } from "../automations/as-player-transpose-bench-to-board.js";

export async function withTwoPiecesOnBoard(): Promise<TestContext> {
	const testContext = await withOneBoughtHero();

	await asPlayerTransposeBenchToBoard(testContext, 0, {
		positionX: 1,
		positionY: 0,
	});

	return testContext;
}
