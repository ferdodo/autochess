import type { Confrontation } from "../types/confrontation";
import type { Hero } from "../types/hero";

export function findHittableHero(
	confrontation: Confrontation,
	hero: Hero,
): Hero | undefined {
	const heroIsTeamA = confrontation.playerAHeroes.some((h) => h.id === hero.id);

	if (heroIsTeamA) {
		return confrontation.playerBHeroes.find(
			(h) =>
				h.position.x === hero.position.x + 1 &&
				h.position.y === hero.position.y,
		);
	}

	return confrontation.playerAHeroes.find(
		(h) =>
			h.position.x === hero.position.x - 1 && h.position.y === hero.position.y,
	);
}
