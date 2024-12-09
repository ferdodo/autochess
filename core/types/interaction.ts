import type { PieceSlot } from "./piece-slot.js";

export interface Interaction {
	grabPiece?: PieceSlot;
	ungrabPiece?: PieceSlot;
	shopBuy?: number;
	reroll?: true;
	levelUp?: true;
}
