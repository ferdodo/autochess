import type { HeroId } from "./hero-id.js";
import type { Block } from "blockwise";

export interface Scope {
	heroes: HeroId[];
	positions: Block[];
}
