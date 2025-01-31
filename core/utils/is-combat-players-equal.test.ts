import { test, expect } from "vitest";
import { withEightPlayerGameStarted } from "../fixtures/with-eight-players-game-started.js";
import { goToNextCombatPhase } from "../automations/go-to-next-combat-phase.js";
import { getGame } from "./get-game.js";
import { isCombatPlayersEqual } from "./is-combat-players-equal.js";

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
