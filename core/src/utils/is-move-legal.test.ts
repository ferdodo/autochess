import { test, expect } from "vitest";
import { withTwoPlayersInCombat } from "../fixtures/withTwoPlayersInCombat.js";
import { getGame } from "./getGame.js";
import { getHeroAndATeamFromConfrontation } from "./getHeroAndATeamFromConfrontation.js";
import { isMoveLegal } from "./isMoveLegal.js";
import { computeConfrontation } from "./computeConfrontation.js";

test("Every move in a combat should be legal", async () => {
	const testContext = await withTwoPlayersInCombat();
	const game = await getGame(testContext);
	const combat = game.combats?.[0];

	if (!combat) {
		throw new Error("No combat found !");
	}

	let confrontation = {
		playerAHeroes: combat.playerAHeroes,
		playerBHeroes: combat.playerBHeroes,
	};

	for (const action of combat.actions) {
		if (action.move) {
			const [hero] = getHeroAndATeamFromConfrontation(
				confrontation,
				action.move.heroId,
			);

			expect(isMoveLegal(confrontation, hero)(action.move.position)).toBe(true);
		}

		confrontation = computeConfrontation(confrontation, action);
	}
});

test("Player moving on the position of another player should be illegal", async () => {
	const testContext = await withTwoPlayersInCombat();
	const game = await getGame(testContext);
	const combat = game.combats?.[0];

	if (!combat) {
		throw new Error("No combat found !");
	}

	const confrontation = {
		playerAHeroes: combat.playerAHeroes,
		playerBHeroes: combat.playerBHeroes,
	};

	const [hero] = getHeroAndATeamFromConfrontation(
		confrontation,
		confrontation.playerAHeroes[0].id,
	);

	expect(
		isMoveLegal(confrontation, hero)(confrontation.playerBHeroes[0].position),
	).toBe(false);
});
