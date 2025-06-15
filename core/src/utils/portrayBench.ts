import { Animation } from "../types/Animation.js";
import type { Hero } from "../types/Hero.js";
import type { HeroId } from "../types/HeroId.js";
import type { Piece } from "../types/Piece.js";

export function portrayBench(
	bench: Record<number, Hero>,
	transposedHero: HeroId | undefined,
): Record<number, Piece> {
	return Object.fromEntries(
		Object.entries(bench)
			.filter(([_, hero]) => Boolean(hero))
			.map(([index, hero]) => [
				Number.parseInt(index, 10),
				{
					hero,
					animation: Animation.Idle,
					transposed: hero.id === transposedHero,
					animationStartAt: Date.now(),
					right: false,
				},
			]),
	);
}
