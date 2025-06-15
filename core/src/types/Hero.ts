import type { Appellation } from "./Appellation.js";
import type { Block } from "blockwise";
import type { Attributes } from "./Attributes.js";
import type { Grade } from "./Grade.js";
import type { HeroId } from "./HeroId.js";

export interface Hero {
	id: HeroId;
	appellation: Appellation;
	grade: Grade;
	position: Block;
	attributes: Attributes;
}
