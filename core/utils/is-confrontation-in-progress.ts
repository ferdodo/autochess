import type { Confrontation } from "../types/confrontation.js";

export function isConfrontationInProgress(
	confrontation: Confrontation,
): boolean {
	return (
		confrontation.playerAHeroes.some((hero) => hero.attributes.health > 0) &&
		confrontation.playerBHeroes.some((hero) => hero.attributes.health > 0)
	);
}
