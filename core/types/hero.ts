import type { Appellation } from "./appellation";
import type { Block } from "blockwise";
import type { Attributes } from "./attributes";

export interface Hero {
	id: string;
	appellation: Appellation;
	grade: number;
	position: Block;
	attributes: Attributes;
}
