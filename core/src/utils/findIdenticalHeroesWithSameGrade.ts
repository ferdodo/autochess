import type { Game } from "../types/Game.js";
import type { Hero } from "../types/Hero.js";
import type { PublicKey } from "../types/PublicKey.js";

export function findIdenticalHeroesWithSameGrade(
	game: Game,
	publicKey: PublicKey,
): [Hero, Hero] | null {
	const boardHeroes = game.playerHeroes[publicKey] || [];
	const benchHeroes = Object.values(game.playerBenches[publicKey] || {}).filter(
		Boolean,
	);
	const allHeroes = [...boardHeroes, ...benchHeroes];

	for (let i = 0; i < allHeroes.length; i++) {
		for (let j = i + 1; j < allHeroes.length; j++) {
			if (
				allHeroes[i].appellation === allHeroes[j].appellation &&
				allHeroes[i].grade === allHeroes[j].grade
			) {
				return [allHeroes[i], allHeroes[j]];
			}
		}
	}

	return null;
}
