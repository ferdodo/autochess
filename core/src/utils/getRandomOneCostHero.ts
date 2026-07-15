import type { Hero } from "../types/Hero.js";
import { getHeroCost } from "./getHeroCost.js";
import { HeroFactory } from "./HeroFactory.js";

export function getRandomOneCostHero(): Hero {
	const heroFactory = new HeroFactory();
	let hero = heroFactory.build();

	while (getHeroCost(hero.appellation) !== 1) {
		hero = heroFactory.build();
	}

	return hero;
}
