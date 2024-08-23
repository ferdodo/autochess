import type { Block } from "blockwise";
import type { Appellation } from "./appellation";

export interface Hero {
	appellation: Appellation;
	position: Block;
	grade: number;
}
