import type { Confrontation } from "../types/confrontation.js";
import type { Action } from "../types/action.js";
import type { Move } from "../types/move.js";

export function computeConfrontation(
	confrontation: Confrontation,
	action: Action,
): Confrontation {
	if (action.move) {
		const move: Move = action.move;

		for (const hero of confrontation.playerAHeroes) {
			if (hero.id === action.move.heroId) {
				return {
					...confrontation,
					playerAHeroes: confrontation.playerAHeroes.map((h) =>
						h.id === hero.id ? { ...h, position: move.position } : h,
					),
				};
			}
		}

		for (const hero of confrontation.playerBHeroes) {
			if (hero.id === action.move.heroId) {
				return {
					...confrontation,
					playerBHeroes: confrontation.playerBHeroes.map((h) =>
						h.id === hero.id ? { ...h, position: move.position } : h,
					),
				};
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

		return {
			...confrontation,
			playerAHeroes: confrontation.playerAHeroes.map((h) =>
				h.id === target.id
					? {
							...h,
							attributes: {
								...h.attributes,
								health: h.attributes.health - 1,
							},
						}
					: h,
			),
			playerBHeroes: confrontation.playerBHeroes.map((h) =>
				h.id === target.id
					? {
							...h,
							attributes: {
								...h.attributes,
								health: h.attributes.health - 1,
							},
						}
					: h,
			),
		};
	}

	throw new Error("No action found !");
}
