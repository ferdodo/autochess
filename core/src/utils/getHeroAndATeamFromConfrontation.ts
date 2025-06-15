import type { Confrontation } from "../types/Confrontation.js";
import type { Hero } from "../types/Hero.js";
import type { HeroId } from "../types/HeroId.js";

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
