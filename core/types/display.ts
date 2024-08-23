import type { Block } from "blockwise";
import type { Piece } from "./piece";

export interface Display {
	board: Block;
	pieces: Piece[];
}
