import type { Hero } from "../types/Hero.js";
import { Trait } from "../types/Trait.js";
import { getDarkSynergyLifeStealPercentage } from "./getDarkSynergyLifeStealPercentage.js";
import { isHeroTraitSynergyActive } from "./isHeroTraitSynergyActive.js";

export function computeDarkLifeSteal(
	attacker: Hero,
	attackerTeam: Hero[],
	damage: number,
): number {
	const darkSynergyActive = isHeroTraitSynergyActive(
		attacker,
		attackerTeam,
		Trait.Dark,
	);

	return darkSynergyActive ? damage * getDarkSynergyLifeStealPercentage() : 0;
}
