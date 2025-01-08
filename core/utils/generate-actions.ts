import type { Action } from "../types/action.js";
import { combatSchema, type Combat } from "../types/combat.js";
import type { Confrontation } from "../types/confrontation.js";
import type { Game } from "../types/game.js";
import { computeConfrontation } from "./compute-confrontation.js";
import { createConfrontationHeroOrder } from "./create-confrontation-hero-order.js";
import { findHittableHero } from "./find-hittable-hero.js";
import { isConfrontationInProgress } from "./is-confrontation-in-progress.js";
import { moveToClosestHittableHero } from "./move-to-closest-hittable-hero.js";

export async function* generateActions(
	combat: Combat,
): AsyncIterableIterator<Action> {
	const heroOrder = createConfrontationHeroOrder(combat);

	let confrontation: Confrontation = {
		playerAHeroes: combat.playerAHeroes,
		playerBHeroes: combat.playerBHeroes,
	};

	let actionCount = 0;

	while (isConfrontationInProgress(confrontation)) {
		for (const hero of heroOrder) {
			actionCount += 1;

			if (actionCount > combatSchema.properties.actions.maxItems) {
				throw new Error("Too many actions !");
			}

			const hittableHero = findHittableHero(confrontation, hero.id);

			if (hittableHero) {
				const action = {
					attack: {
						attacker: hero.id,
						target: hittableHero.id,
					},
				};

				confrontation = computeConfrontation(confrontation, action);
				yield action;
			} else {
				const action = {
					move: {
						heroId: hero.id,
						position: moveToClosestHittableHero(confrontation, hero.id),
					},
				};

				confrontation = computeConfrontation(confrontation, action);
				yield action;
			}
		}
	}
}
