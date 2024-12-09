import type { Animation } from "./animation.js";
import type { Hero } from "./hero.js";

export interface Piece {
	hero: Hero;
	animation: Animation;
	transposed: boolean;
	animationStartAt: number;
	right: boolean;
}
