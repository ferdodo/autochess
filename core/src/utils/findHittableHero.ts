import type { Confrontation } from "../types/Confrontation.js";
import type { Hero } from "../types/Hero.js";
import type { HeroId } from "../types/HeroId.js";
import { getHeroAndATeamFromConfrontation } from "./getHeroAndATeamFromConfrontation.js";
import { revertPosition } from "./revertPosition.js";

export function findHittableHero(
	confrontation: Confrontation,
	heroId: HeroId,
): Hero | undefined {
	const [hero, isTeamA] = getHeroAndATeamFromConfrontation(
		confrontation,
		heroId,
	);

	const heroes = isTeamA
		? confrontation.playerBHeroes
		: confrontation.playerAHeroes;

	return heroes
		.filter((h) => h.attributes.health > 0)
		.find((h) => {
			const pos = revertPosition(h.position);
			return pos.x === hero.position.x + 1 && pos.y === hero.position.y;
		});
}
