import type { Block } from "blockwise";
import type { Piece } from "./piece";
import type { Product } from "./product";
import type { Phase } from "./phase";

export interface Display {
	board: Block;
	pieces: Piece[];
	shop: Product[];
	bench: Record<number, Piece>;
	phase: Phase;
}
