import { test } from "vitest";
import { withTwoPlayerGameStarted } from "../fixtures/with-two-player-game-started";
import { asPlayerTransposeBoardToBoard } from "../automations/as-player-transpose-board-to-board";
import { withOneBoughtHero } from "../fixtures/with-one-bought-hero";
import { asPlayerTransposeBenchToBoard } from "../automations/as-player-transpose-bench-to-board";

test("Transpose shall move piece to an empty cell", async () => {
	const testContext = await withTwoPlayerGameStarted();
	await asPlayerTransposeBoardToBoard(testContext);
});

test("Transpose from bench to board", async () => {
	const testContext = await withOneBoughtHero();
	await asPlayerTransposeBenchToBoard(testContext);
});
