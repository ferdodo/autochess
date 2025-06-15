import type { HeroId } from "./HeroId.js";
import type { Block } from "blockwise";

export interface Scope {
	heroes: HeroId[];
	positions: Block[];
}
