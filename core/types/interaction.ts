interface GrabBoardPiece {
	positionX: number;
	positionY: number;
}

interface UngrabBoardPiece {
	positionX: number;
	positionY: number;
}

interface GrabBenchPiece {
	position: number;
}

interface UngrabBenchPiece {
	position: number;
}

interface shopBuy {
	slot: number;
}

export interface Interaction {
	grabBoardPiece?: GrabBoardPiece;
	ungrabBoardPiece?: UngrabBoardPiece;
	grabBenchPiece?: GrabBenchPiece;
	ungrabBenchPiece?: UngrabBenchPiece;
	shopBuy?: shopBuy;
}
