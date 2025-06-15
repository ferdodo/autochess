import { test, expect } from "vitest";
import { withTwoBotGameFighting } from "../fixtures/withTwoBotGameFighting.js";
import { getGame } from "./getGame.js";
import { Phase } from "../types/Phase.js";
import type { Hero } from "../types/Hero.js";
import { computeConfrontation } from "./computeConfrontation.js";

test("dead player should not generate new actions", async () => {
	const testContext = await withTwoBotGameFighting();
	const game = await getGame(testContext);
	expect(game.phase).toBe(Phase.Combat);

	if (!game.combats) {
		throw new Error("No combats found !");
	}

	const combat = game.combats[0];

	if (!combat) {
		throw new Error("No combat found !");
	}

	let confrontation = {
		playerAHeroes: combat.playerAHeroes,
		playerBHeroes: combat.playerBHeroes,
	};

	let deadHero: Hero | undefined;
	let deadHeroHasActions = false;

	for (const action of combat.actions) {
		confrontation = computeConfrontation(confrontation, action);

		const deadHeroes = [
			...confrontation.playerAHeroes.filter((h) => h.attributes.health === 0),
			...confrontation.playerBHeroes.filter((h) => h.attributes.health === 0),
		];

		deadHero ||= deadHeroes.find(Boolean);

		for (const deadHero of deadHeroes) {
			if (
				action.attack?.attacker === deadHero.id ||
				action.move?.heroId === deadHero.id
			) {
				deadHeroHasActions = true;
			}
		}
	}

	expect(deadHero).toBeTruthy();
	expect(deadHeroHasActions).toBe(false);
});
