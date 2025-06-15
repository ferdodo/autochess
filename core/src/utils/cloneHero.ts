import type { Hero } from "../types/Hero.js";

export function cloneHero(hero: Hero): Hero {
	return {
		id: hero.id,
		appellation: hero.appellation,
		grade: hero.grade,
		position: Object.assign({}, hero.position),
		attributes: Object.assign({}, hero.attributes),
	};
}
