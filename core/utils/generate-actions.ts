import type { Action } from "../types/action";
import type { Combat } from "../types/combat";
import type { Confrontation } from "../types/confrontation";
import { computeConfrontation } from "./compute-confrontation";
import { createConfrontationHeroOrder } from "./create-confrontation-hero-order";
import { findHittableHero } from "./find-hittable-hero";
import { isConfrontationInProgress } from "./is-confrontation-in-progress";
import { moveToClosestHittableHero } from "./move-to-closest-hittable-hero";

export function* generateActions(combat: Combat): IterableIterator<Action> {
	const heroOrder = createConfrontationHeroOrder(combat);

	let confrontation: Confrontation = {
		playerAHeroes: combat.playerAHeroes,
		playerBHeroes: combat.playerBHeroes,
	};

	while (isConfrontationInProgress(confrontation)) {
		for (const hero of heroOrder) {
			const hittableHero = findHittableHero(confrontation, hero);

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
						position: moveToClosestHittableHero(confrontation, hero),
					},
				};

				confrontation = computeConfrontation(confrontation, action);
				yield action;
			}
		}
	}
}
