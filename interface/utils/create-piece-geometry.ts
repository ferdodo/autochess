import { PlaneGeometry } from "three";

export function createPieceGeometry(): PlaneGeometry {
	const pieceSize = 1 / 10;
	return new PlaneGeometry(pieceSize, pieceSize);
}
