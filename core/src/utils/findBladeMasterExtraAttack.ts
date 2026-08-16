import type { Action } from "../types/Action.js";
import type { Confrontation } from "../types/Confrontation.js";
import type { HeroId } from "../types/HeroId.js";
import { Trait } from "../types/Trait.js";
import { findHittableHero } from "./findHittableHero.js";
import { isHeroTraitSynergyActive } from "./isHeroTraitSynergyActive.js";

export function findBladeMasterExtraAttack(
	confrontation: Confrontation,
	heroId: HeroId,
): Action | undefined {
	const attacker =
		confrontation.playerAHeroes.find((h) => h.id === heroId) ||
		confrontation.playerBHeroes.find((h) => h.id === heroId);

	if (!attacker) {
		return undefined;
	}

	const attackerTeam = confrontation.playerAHeroes.some((h) => h.id === heroId)
		? confrontation.playerAHeroes
		: confrontation.playerBHeroes;

	const bladeMasterSynergyActive = isHeroTraitSynergyActive(
		attacker,
		attackerTeam,
		Trait.BladeMaster,
	);

	if (!bladeMasterSynergyActive) {
		return undefined;
	}

	const target = findHittableHero(confrontation, heroId);

	if (!target) {
		return undefined;
	}

	return {
		attack: {
			attacker: heroId,
			target: target.id,
		},
	};
}
