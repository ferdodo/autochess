import type { HeroId } from "./hero-id";
import type { Block } from "blockwise";

export interface Scope {
	heroes: HeroId[];
	positions: Block[];
}
