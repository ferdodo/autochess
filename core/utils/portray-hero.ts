import type { Piece } from "../types/piece.js";
import { Animation } from "../types/animation.js";
import { computeAnimation } from "./compute-animation.js";
import type { Action } from "../types/action.js";
import type { Hero } from "../types/hero.js";
import { revertPosition } from "./revert-position.js";

export function portrayHero(
	hero: Hero,
	right: boolean,
	actions?: Action[],
	portrayedConfrontation?: Piece[],
): Piece {
	const previousPiece = portrayedConfrontation?.find(
		(p) => p.hero.id === hero.id,
	);

	return {
		hero: right
			? {
					...hero,
					position: revertPosition(hero.position),
				}
			: hero,
		animation:
			actions !== undefined ? computeAnimation(hero, actions) : Animation.Idle,
		transposed: false,
		animationStartAt:
			previousPiece?.animation === Animation.Death
				? previousPiece.animationStartAt
				: Date.now(),
		right,
	};
}
