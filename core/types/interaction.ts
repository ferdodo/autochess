import type { PieceSlot } from "./piece-slot";

interface shopBuy {
	productId: string;
}

export interface Interaction {
	grabPiece?: PieceSlot;
	ungrabPiece?: PieceSlot;
	shopBuy?: shopBuy;
	reroll?: true;
	levelUp?: true;
}
