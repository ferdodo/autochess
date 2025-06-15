import type { Action } from "../types/Action.js";
import { Animation } from "../types/Animation.js";
import type { Hero } from "../types/Hero.js";
import type { Piece } from "../types/Piece.js";
import { computeAnimation } from "./computeAnimation.js";
import { revertPosition } from "./revertPosition.js";

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
