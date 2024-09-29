interface GrabBoardPiece {
	positionX: number;
	positionY: number;
}

interface UngrabPiece {
	positionX?: number;
	positionY?: number;
	benchPosition?: number;
}

interface GrabBenchPiece {
	position: number;
}

interface shopBuy {
	productId: string;
}

export interface Interaction {
	grabBoardPiece?: GrabBoardPiece;
	ungrabPiece?: UngrabPiece;
	grabBenchPiece?: GrabBenchPiece;
	shopBuy?: shopBuy;
}
