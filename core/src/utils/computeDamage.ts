import type { Hero } from "../types/Hero.js";
import { Trait } from "../types/Trait.js";
import { getHeroTraits } from "./getHeroTraits.js";
import { getOrcSynergyDamageBonus } from "./getOrcSynergyDamageBonus.js";
import { getSynergiesThresholds } from "./getSynergiesThresholds.js";

export function computeDamage(attacker: Hero, attackerTeam: Hero[]): number {
	const attackerHasOrcTrait = getHeroTraits(attacker.appellation).includes(
		Trait.Orc,
	);

	const orcCount = attackerTeam.filter(
		(hero) =>
			hero.attributes.health > 0 &&
			getHeroTraits(hero.appellation).includes(Trait.Orc),
	).length;

	const orcSynergyActive = orcCount >= getSynergiesThresholds()[Trait.Orc];

	return (
		1 +
		attacker.grade +
		(attackerHasOrcTrait && orcSynergyActive ? getOrcSynergyDamageBonus() : 0)
	);
}
