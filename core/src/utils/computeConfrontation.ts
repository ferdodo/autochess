import type { Confrontation } from "../types/Confrontation.js";
import type { Action } from "../types/Action.js";
import type { Hero } from "../types/Hero.js";
import type { Move } from "../types/Move.js";
import { computeDamage } from "./computeDamage.js";
import { computeDarkLifeSteal } from "./computeDarkLifeSteal.js";

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

		const attackerTeam = confrontation.playerAHeroes.some(
			(hero) => hero.id === attacker.id,
		)
			? confrontation.playerAHeroes
			: confrontation.playerBHeroes;

		const damage = computeDamage(attacker, attackerTeam);
		const attackerHeal = computeDarkLifeSteal(attacker, attackerTeam, damage);

		const applyAttack = (hero: Hero): Hero => {
			if (hero.id === target.id) {
				return {
					...hero,
					attributes: {
						...hero.attributes,
						health: hero.attributes.health - damage,
					},
				};
			}

			if (hero.id === attacker.id && attackerHeal > 0) {
				return {
					...hero,
					attributes: {
						...hero.attributes,
						health: Math.min(
							hero.attributes.maxHealth,
							hero.attributes.health + attackerHeal,
						),
					},
				};
			}

			return hero;
		};

		return {
			...confrontation,
			playerAHeroes: confrontation.playerAHeroes.map(applyAttack),
			playerBHeroes: confrontation.playerBHeroes.map(applyAttack),
		};
	}

	throw new Error("No action found !");
}
