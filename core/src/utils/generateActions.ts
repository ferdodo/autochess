import { combatSchema } from "../schemas/combatSchema.js";
import type { Action } from "../types/Action.js";
import type { Combat } from "../types/Combat.js";
import type { Confrontation } from "../types/Confrontation.js";
import { computeConfrontation } from "./computeConfrontation.js";
import { createConfrontationHeroOrder } from "./createConfrontationHeroOrder.js";
import { findHittableHero } from "./findHittableHero.js";
import { isConfrontationInProgress } from "./isConfrontationInProgress.js";
import { moveToClosestHittableHero } from "./moveToClosestHittableHero.js";

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

			const currentHero =
				confrontation.playerAHeroes.find((h) => h.id === hero.id) ||
				confrontation.playerBHeroes.find((h) => h.id === hero.id);

			if (currentHero?.attributes.health === 0) {
				continue;
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
