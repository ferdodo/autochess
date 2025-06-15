import type { Hero } from "../types/Hero.js";
import type { Action } from "../types/Action.js";
import { Animation } from "../types/Animation.js";

export function computeAnimation(hero: Hero, actions: Action[]) {
	if (hero.attributes.health <= 0) {
		return Animation.Death;
	}

	for (const action of actions) {
		if (action.move?.heroId === hero.id) {
			return Animation.Walk;
		}

		if (action.attack?.attacker === hero.id) {
			return Animation.Attack;
		}

		if (action.attack?.target === hero.id) {
			return Animation.Hurt;
		}
	}

	return Animation.Idle;
}
