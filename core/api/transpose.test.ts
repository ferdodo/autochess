import { test } from "vitest";
import { withTwoPlayerGameStarted } from "../fixtures/with-two-player-game-started";
import { asPlayerTranspose } from "../automations/as-player-transpose";

test("Transpose shall move piece to an empty cell", async () => {
	const testContext = await withTwoPlayerGameStarted();
	await asPlayerTranspose(testContext);
});
