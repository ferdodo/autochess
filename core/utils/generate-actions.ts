import type { Action } from "../types/action";
import { combatSchema, type Combat } from "../types/combat";
import type { Confrontation } from "../types/confrontation";
import { computeConfrontation } from "./compute-confrontation";
import { createConfrontationHeroOrder } from "./create-confrontation-hero-order";
import { findHittableHero } from "./find-hittable-hero";
import { getHeroAndATeamFromConfrontation } from "./get-hero-and-a-team-from-confrontation";
import { isConfrontationInProgress } from "./is-confrontation-in-progress";
import { moveToClosestHittableHero } from "./move-to-closest-hittable-hero";
import { revertPosition } from "./revert-position";

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
