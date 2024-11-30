import { withTwoPlayerGameStarted } from "../fixtures/with-two-player-game-started";
import { findOwnHeroFromSlot } from "./find-own-hero-from-slot";
import { test, expect } from "vitest";
import { getGame } from "../utils/get-game";

test("findOwnHeroFromSlot", async () => {
	const testContext = await withTwoPlayerGameStarted();
	const game = await getGame(testContext);
	const publicKey = game.publicKeys[0] || "Error";
	const slot = { positionX: 0, positionY: 0 };
	const hero = findOwnHeroFromSlot(game, slot, publicKey);
	expect(hero).toBeDefined();
});
