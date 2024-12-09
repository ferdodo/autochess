import type { Confrontation } from "../types/confrontation.js";
import type { Action } from "../types/action.js";

export function computeConfrontation(
	_confrontation: Confrontation,
	action: Action,
): Confrontation {
	const confrontation = structuredClone(_confrontation);

	if (action.move) {
		for (const hero of confrontation.playerAHeroes) {
			if (hero.id === action.move.heroId) {
				hero.position = action.move.position;
				return confrontation;
			}
		}

		for (const hero of confrontation.playerBHeroes) {
			if (hero.id === action.move.heroId) {
				hero.position = action.move.position;
				return confrontation;
			}
		}

		throw new Error("Hero not found !");
	}

	if (action.attack) {
		const attack = action.attack;

		const heroes = [
			...confrontation.playerAHeroes,
			...confrontation.playerBHeroes,
		];

		const attacker = heroes.find((hero) => hero.id === attack.attacker);

		if (!attacker) {
			throw new Error("Attacker not found !");
		}

		const target = heroes.find((hero) => hero.id === attack.target);

		if (!target) {
			throw new Error("Target not found !");
		}

		target.attributes.health -= 1;
		return confrontation;
	}

	throw new Error("No action found !");
}
