import { test } from "vitest";
import { withGameOver } from "../fixtures/with-game-over.js";

test("Game should run until game is over", async () => {
	await withGameOver();
	await new Promise((resolve) => setTimeout(resolve, 1));
});
