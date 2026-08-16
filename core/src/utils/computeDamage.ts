import type { Hero } from "../types/Hero.js";
import { Trait } from "../types/Trait.js";
import { getBaseDamage } from "./getBaseDamage.js";
import { getOrcSynergyDamageBonus } from "./getOrcSynergyDamageBonus.js";
import { isHeroTraitSynergyActive } from "./isHeroTraitSynergyActive.js";

export function computeDamage(attacker: Hero, attackerTeam: Hero[]): number {
	const orcBonusActive = isHeroTraitSynergyActive(
		attacker,
		attackerTeam,
		Trait.Orc,
	);

	return (
		getBaseDamage(attacker.grade) +
		(orcBonusActive ? getOrcSynergyDamageBonus() : 0)
	);
}
