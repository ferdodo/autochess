import type { Block } from "blockwise";
import type { Animation } from "./animation";
import type { Attributes } from "./attributes";
import type { Hero } from "./hero";

export interface Piece {
	id: string;
	hero: Hero;
	position: Block;
	animation: Animation;
	animationStartAt: number;
	attributes: Attributes;
	right: boolean;
}
