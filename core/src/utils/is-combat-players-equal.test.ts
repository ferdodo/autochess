import { test, expect } from "vitest";
import { withEightPlayerGameStarted } from "../fixtures/withEightPlayerGameStarted.js";
import { goToNextCombatPhase } from "../automations/goToNextCombatPhase.js";
import { getGame } from "./getGame.js";
import { isCombatPlayersEqual } from "./isCombatPlayersEqual.js";

test("Should be truthy when two games have identical combat", async () => {
	const testContext = await withEightPlayerGameStarted();
	await goToNextCombatPhase(testContext);

	const game = await getGame(testContext);
	const combats = game.combats;

	if (!combats) {
		throw new Error("Missing game combats !");
	}

	const isEqual = isCombatPlayersEqual(combats[0], combats[0]);
	expect(isEqual).toBeTruthy();
});

test("Should be truthy when two games have different combat", async () => {
	const testContext = await withEightPlayerGameStarted();
	await goToNextCombatPhase(testContext);

	const game = await getGame(testContext);
	const combats = game.combats;

	if (!combats) {
		throw new Error("Missing game combats !");
	}

	const isEqual = isCombatPlayersEqual(combats[0], combats[1]);
	expect(isEqual).toBeFalsy();
});
