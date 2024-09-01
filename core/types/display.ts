import type { Block } from "blockwise";
import type { Piece } from "./piece";
import type { Product } from "./product";
import type { Hero } from "./hero";

export interface Display {
	board: Block;
	pieces: Piece[];
	shop: Product[];
	bench: Record<number, Hero>;
}
