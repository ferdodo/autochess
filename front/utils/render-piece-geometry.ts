import { PlaneGeometry } from "three";
import type { Display } from "core/types/display";
import type { Context } from "../types/context";

export function renderPieceGeometry(context: Context, display: Display): void {
	const pieceSize = 1 / display.board.w;

	if (
		context.pieceGeometry.parameters.width !== pieceSize ||
		context.pieceGeometry.parameters.height !== pieceSize
	) {
		context.pieceGeometry.dispose();
		context.pieceGeometry = new PlaneGeometry(pieceSize, pieceSize);
	}
}
