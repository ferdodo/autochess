import type { Combat } from "../types/combat";
import type { Hero } from "../types/hero";
import { randomizeArray } from "./randomize-array";

export function createConfrontationHeroOrder(combat: Combat): Hero[] {
	const [playerXHeroes, playerYHeroes] = randomizeArray([
		combat.playerAHeroes,
		combat.playerBHeroes,
	]);

	const playerXHeroesInRanomOrder = randomizeArray(playerXHeroes);
	const playerYHeroesInRanomOrder = randomizeArray(playerYHeroes);
	const result: Hero[] = [];

	while (
		playerXHeroesInRanomOrder.length > 0 ||
		playerYHeroesInRanomOrder.length > 0
	) {
		const playerXHero = playerXHeroesInRanomOrder.shift();

		if (playerXHero) {
			result.push(playerXHero);
		}

		const playerYHero = playerYHeroesInRanomOrder.shift();

		if (playerYHero) {
			result.push(playerYHero);
		}
	}

	return result;
}
