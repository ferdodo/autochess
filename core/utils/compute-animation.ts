import type { Hero } from "../types/hero.js";
import type { Action } from "../types/action.js";
import { Animation } from "../types/animation.js";

export function computeAnimation(hero: Hero, actions: Action[]) {
	for (const action of actions) {
		if (action.move?.heroId === hero.id) {
			return Animation.Walk;
		}

		if (action.attack?.attacker === hero.id) {
			return Animation.Attack;
		}

		if (action.attack?.target === hero.id) {
			if (hero.attributes.health > 0) {
				return Animation.Hurt;
			}

			return Animation.Death;
		}
	}

	return Animation.Idle;
}