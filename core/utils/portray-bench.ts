import type { Hero } from "../types/hero";
import type { Piece } from "../types/piece";
import { Animation } from "../types/animation";
import type { HeroId } from "../types/hero-id";

export function portrayBench(
	bench: Record<number, Hero>,
	transposedHero: HeroId | undefined,
): Record<number, Piece> {
	return Object.fromEntries(
		Object.entries(bench).map(([index, hero]) => [
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
