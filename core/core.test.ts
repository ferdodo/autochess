import { test, expect } from "vitest";
import { withTwoPlayerGameStarted } from "./fixtures/with-two-player-game-started";

test("lib", async () => {
	const testContext = await withTwoPlayerGameStarted();
	const games = await testContext.backContext.gameDataMapper.readAll();
	expect(games.length).toBe(1);
});
