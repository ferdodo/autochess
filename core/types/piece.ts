import type { Animation } from "./animation";
import type { Hero } from "./hero";

export interface Piece {
	hero: Hero;
	animation: Animation;
	transposed: boolean;
	animationStartAt: number;
	right: boolean;
}
