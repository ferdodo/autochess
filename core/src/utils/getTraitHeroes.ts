import { Appellation } from "../types/Appellation.js";
import { Trait } from "../types/Trait.js";
import { getHeroTraits } from "./getHeroTraits.js";

export function getTraitHeroes(): Record<Trait, Appellation[]> {
	const heroes = Object.values(Appellation);
	const traitHeroes = {} as Record<Trait, Appellation[]>;

	for (const trait of Object.values(Trait)) {
		traitHeroes[trait] = heroes.filter((hero) =>
			getHeroTraits(hero).includes(trait),
		);
	}

	return traitHeroes;
}
