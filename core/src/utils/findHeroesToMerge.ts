import type { Game } from "../types/Game.js";
import type { Hero } from "../types/Hero.js";
import type { PublicKey } from "../types/PublicKey.js";
import { getMaxGrade } from "./getMaxGrade.js";

export function findHeroesToMerge(
	game: Game,
	publicKey: PublicKey,
): Array<[Hero, Hero, Hero]> {
	const allHeroes = getAllPlayerHeroes(game, publicKey);
	const groups = groupHeroesByAppellationAndGrade(allHeroes);
	const mergeableTuples: Array<[Hero, Hero, Hero]> = [];

	for (const heroes of Object.values(groups)) {
		if (heroes.length >= 3 && heroes[0].grade < getMaxGrade()) {
			for (let i = 0; i + 2 < heroes.length; i += 3)
				mergeableTuples.push([heroes[i], heroes[i + 1], heroes[i + 2]]);
		}
	}

	return mergeableTuples;
}

function getAllPlayerHeroes(game: Game, publicKey: PublicKey): Hero[] {
	const boardHeroes = game.playerHeroes[publicKey] || [];
	const benchHeroes = Object.values(game.playerBenches[publicKey] || {}).filter(
		Boolean,
	);

	return [...boardHeroes, ...benchHeroes];
}

function groupHeroesByAppellationAndGrade(
	heroes: Hero[],
): Record<string, Hero[]> {
	const groups: Record<string, Hero[]> = {};

	for (const hero of heroes) {
		const key = `${hero.appellation}|${hero.grade}`;

		if (!groups[key]) {
			groups[key] = [];
		}

		groups[key].push(hero);
	}

	return groups;
}
