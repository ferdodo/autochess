import { PlaneGeometry } from "three";

export function createPiecesBarsBackgroundGeometry(): PlaneGeometry {
	const pieceSize = 1 / 10;
	const barsWidth = pieceSize * 0.6;
	const barsHeight = pieceSize * 0.11;
	return new PlaneGeometry(barsWidth, barsHeight);
}
