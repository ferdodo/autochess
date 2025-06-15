import type { PieceSlot } from "./PieceSlot.js";

export interface Interaction {
	grabPiece?: PieceSlot;
	ungrabPiece?: PieceSlot;
	shopBuy?: number;
	reroll?: true;
	levelUp?: true;
	clickFullscreen?: true;
}
