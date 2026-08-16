import type { Hero } from "../types/Hero.js";
import type { Trait } from "../types/Trait.js";
import { getHeroTraits } from "./getHeroTraits.js";
import { getSynergiesThresholds } from "./getSynergiesThresholds.js";

export function isHeroTraitSynergyActive(
	hero: Hero,
	team: Hero[],
	trait: Trait,
): boolean {
	const heroHasTrait = getHeroTraits(hero.appellation).includes(trait);

	const traitCount = team.filter(
		(teamHero) =>
			teamHero.attributes.health > 0 &&
			getHeroTraits(teamHero.appellation).includes(trait),
	).length;

	return heroHasTrait && traitCount >= getSynergiesThresholds()[trait];
}
