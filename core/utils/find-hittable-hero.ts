import type { Confrontation } from "../types/confrontation";
import type { HeroId } from "../types/hero-id";
import { getHeroAndATeamFromConfrontation } from "./get-hero-and-a-team-from-confrontation";
import { revertPosition } from "./revert-position";
import type { Hero } from "../types/hero";

export function findHittableHero(
	confrontation: Confrontation,
	heroId: HeroId,
): Hero | undefined {
	const [hero, isTeamA] = getHeroAndATeamFromConfrontation(
		confrontation,
		heroId,
	);

	if (isTeamA) {
		return confrontation.playerBHeroes.find((h) => {
			const pos = revertPosition(h.position);
			return pos.x === hero.position.x + 1 && pos.y === hero.position.y;
		});
	}

	return confrontation.playerAHeroes.find((h) => {
		const pos = revertPosition(h.position);
		return pos.x === hero.position.x + 1 && pos.y === hero.position.y;
	});
}
