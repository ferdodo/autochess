import type { Animation } from "./Animation.js";
import type { Hero } from "./Hero.js";

export interface Piece {
	hero: Hero;
	animation: Animation;
	transposed: boolean;
	animationStartAt: number;
	right: boolean;
}
