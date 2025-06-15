import { withTwoPlayerGameStarted } from "../fixtures/withTwoPlayerGameStarted.js";
import { findOwnHeroFromSlot } from "./findOwnHeroFromSlot.js";
import { test, expect } from "vitest";
import { getGame } from "./getGame.js";

test("findOwnHeroFromSlot", async () => {
	const testContext = await withTwoPlayerGameStarted();
	const game = await getGame(testContext);
	const publicKey = game.publicKeys[0] || "Error";
	const slot = { positionX: 0, positionY: 0 };
	const hero = findOwnHeroFromSlot(game, slot, publicKey);
	expect(hero).toBeDefined();
	await new Promise((resolve) => setTimeout(resolve, 1));
});
