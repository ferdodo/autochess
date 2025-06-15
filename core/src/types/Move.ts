import type { HeroId } from "./HeroId.js";
import type { Block } from "blockwise";

export interface Move {
	heroId: HeroId;
	position: Block;
}
