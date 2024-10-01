import type { Block } from "blockwise";
import type { Piece } from "./piece";
import type { Product } from "./product";
import type { Phase } from "./phase";
import type { PlayerDisplay } from "./player-display";

export interface Display {
	board: Block;
	pieces: Piece[];
	players: PlayerDisplay[];
	shop: Product[];
	bench: Record<number, Piece>;
	phase: Phase;
	money: number;
}
