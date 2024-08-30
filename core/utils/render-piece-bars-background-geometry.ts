import { PlaneGeometry } from "three";
import type { Display } from "../types/display";
import type { Context } from "../types/context";

export function renderPiecesBarsBackgroundGeometry(
	context: Context,
	display: Display,
): void {
	const pieceSize = 1 / display.board.w;
	const barsWidth = pieceSize * 0.6;
	const barsHeight = pieceSize * 0.11;

	if (
		context.pieceBarsBackgroundGeometry.parameters.width !== barsWidth ||
		context.pieceBarsBackgroundGeometry.parameters.height !== barsHeight
	) {
		context.pieceBarsBackgroundGeometry.dispose();

		context.pieceBarsBackgroundGeometry = new PlaneGeometry(
			barsWidth,
			barsHeight,
		);
	}
}
