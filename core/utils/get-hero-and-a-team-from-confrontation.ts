import type { Confrontation } from "../types/confrontation.js";
import type { HeroId } from "../types/hero-id.js";
import type { Hero } from "../types/hero.js";

export function getHeroAndATeamFromConfrontation(
	confrontation: Confrontation,
	heroId: HeroId,
): [Hero, boolean] {
	const hero = confrontation.playerAHeroes.find((h) => h.id === heroId);

	if (hero) {
		return [hero, true];
	}

	const hero2 = confrontation.playerBHeroes.find((h) => h.id === heroId);

	if (hero2) {
		return [hero2, false];
	}

	throw new Error("Hero not found !");
}
