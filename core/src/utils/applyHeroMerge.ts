import type { Game } from "../types/Game.js";
import type { Hero } from "../types/Hero.js";
import type { PublicKey } from "../types/PublicKey.js";
import { HeroFactory } from "./HeroFactory.js";

export function applyHeroMerge(
	game: Game,
	publicKey: PublicKey,
	heroesToMerge: [Hero, Hero, Hero],
): Game {
	const boardHeroes = game.playerHeroes[publicKey] || [];
	const bench = game.playerBenches[publicKey] || {};

	const grade = heroesToMerge[0].grade;
	const appellation = heroesToMerge[0].appellation;

	const mergedHero = new HeroFactory().build(appellation);
	mergedHero.grade = grade + 1;

	const boardHeroOnTerrain = heroesToMerge.find((h) => boardHeroes.includes(h));

	const updatedBoardHeroes = boardHeroes.filter(
		(h) => !heroesToMerge.includes(h),
	);

	const updatedBench: Record<number, Hero> = {};
	for (const [key, hero] of Object.entries(bench)) {
		if (hero && !heroesToMerge.includes(hero)) {
			updatedBench[Number(key)] = hero;
		}
	}

	if (boardHeroOnTerrain) {
		mergedHero.position = boardHeroOnTerrain.position;
		updatedBoardHeroes.push(mergedHero);
	} else {
		const firstEmptySlot = findFirstEmptySlot(updatedBench);
		updatedBench[firstEmptySlot] = mergedHero;
	}

	return {
		...game,
		playerHeroes: {
			...game.playerHeroes,
			[publicKey]: updatedBoardHeroes,
		},
		playerBenches: {
			...game.playerBenches,
			[publicKey]: updatedBench,
		},
	};
}

function findFirstEmptySlot(bench: Record<number, Hero>): number {
	let slot = 0;
	while (bench[slot]) {
		slot++;
	}
	return slot;
}
