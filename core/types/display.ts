import type { Block } from "blockwise";
import type { Piece } from "./piece";
import type { Product } from "./product";

export interface Display {
	board: Block;
	pieces: Piece[];
	shop: Product[];
}
