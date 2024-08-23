import { PlaneGeometry } from "three";
import type { Display } from "core/types/display";
import type { Context } from "../types/context";

export function renderPieceHealthBarGeometry(
	context: Context,
	display: Display,
): void {
	for (const piece of display.pieces) {
		const barsWidth =
			context.pieceBarsBackgroundGeometry.parameters.width *
			(piece.attributes.health / piece.attributes.maxHealth || 0.001);
		const barsHeight = context.pieceBarsBackgroundGeometry.parameters.height;

		context.pieceHealthBarGeometries[piece.id] ||= new PlaneGeometry(
			barsWidth,
			barsHeight,
		);

		const geometry = context.pieceHealthBarGeometries[piece.id];

		if (
			geometry.parameters.width !== barsWidth ||
			geometry.parameters.height !== barsHeight
		) {
			geometry.dispose();
			context.pieceHealthBarGeometries[piece.id] = new PlaneGeometry(
				barsWidth,
				barsHeight,
			);
		}
	}

	for (const pieceId of Object.keys(context.pieceHealthBarGeometries)) {
		if (!display.pieces.some((piece) => piece.id === pieceId)) {
			context.pieceHealthBarGeometries[pieceId].dispose();
			delete context.pieceHealthBarGeometries[pieceId];
		}
	}
}
