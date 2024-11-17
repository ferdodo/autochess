import { test } from "vitest";
import { withGameOver } from "../fixtures/with-game-over";

test("Game should run until game is over", async () => {
	await withGameOver();
}, 1000);
