import { test, expect } from "vitest";
import { withEightPlayerGameStarted } from "../fixtures/withEightPlayerGameStarted.js";
import { getGame } from "../utils/getGame.js";
import { isGameInProgress } from "../utils/isGameInProgress.js";
import { goToNextCombatPhase } from "../automations/goToNextCombatPhase.js";
import { withThreePlayerGameStarted } from "../fixtures/withThreePlayerGameStarted.js";

test("Players should not fight same opponent twice in a row", async () => {
	const testContext = await withEightPlayerGameStarted();

	let game = await getGame(testContext);
	const playerCombats: Set<string> = new Set();

	while (isGameInProgress(game)) {
		await goToNextCombatPhase(testContext);
		game = await getGame(testContext);

		if (game.combats?.length || 0 <= 3) {
			break;
		}

		for (const combat of game.combats || []) {
			const key = `${combat.playerAPublicKey}-${combat.playerBPublicKey}`;

			if (playerCombats.has(key)) {
				throw new Error("Player is fighting twice the same opponent !");
			}

			playerCombats.add(key);
		}

		playerCombats.clear();

		for (const combat of game.combats || []) {
			const key = `${combat.playerAPublicKey}-${combat.playerBPublicKey}`;
			playerCombats.add(key);
		}
	}
});

test("Games with three players or less can fight the same players twice in a row", async () => {
	const testContext = await withThreePlayerGameStarted();

	let game = await getGame(testContext);
	const playerCombats: Set<string> = new Set();
	let foughtSamePlayer = false;

	while (isGameInProgress(game)) {
		await goToNextCombatPhase(testContext);
		game = await getGame(testContext);

		for (const combat of game.combats || []) {
			const key = `${combat.playerAPublicKey}-${combat.playerBPublicKey}`;

			if (playerCombats.has(key)) {
				foughtSamePlayer = true;
			}

			playerCombats.add(key);
		}

		playerCombats.clear();

		for (const combat of game.combats || []) {
			const key = `${combat.playerAPublicKey}-${combat.playerBPublicKey}`;
			playerCombats.add(key);
		}
	}

	expect(foughtSamePlayer).toBeTruthy();
});

test("Only alive players should have combats", async () => {
	const testContext = await withEightPlayerGameStarted();

	let game = await getGame(testContext);

	while (isGameInProgress(game)) {
		await goToNextCombatPhase(testContext);
		game = await getGame(testContext);

		for (const combat of game.combats || []) {
			if (
				game.playerHealths[combat.playerAPublicKey] <= 0 ||
				game.playerHealths[combat.playerBPublicKey] <= 0
			) {
				throw new Error("Dead player is having combat !");
			}
		}
	}
});
