import type { Hero } from "../types/hero";
import type { Piece } from "../types/piece";
import { Animation } from "../types/animation";

export function portrayBench(
	bench: Record<number, Hero>,
): Record<number, Piece> {
	return Object.fromEntries(
		Object.entries(bench).map(([index, hero]) => [
			Number.parseInt(index, 10),
			{
				hero,
				animation: Animation.Idle,
				transposed: false,
				animationStartAt: Date.now(),
				right: false,
			},
		]),
	);
}
