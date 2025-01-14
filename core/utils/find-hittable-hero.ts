import type { Confrontation } from "../types/confrontation.js";
import type { HeroId } from "../types/hero-id.js";
import { getHeroAndATeamFromConfrontation } from "./get-hero-and-a-team-from-confrontation.js";
import { revertPosition } from "./revert-position.js";
import type { Hero } from "../types/hero.js";

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
