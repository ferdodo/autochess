import { PlaneGeometry } from "three";
import type { Display } from "../types/display";
import type { Context } from "../types/context";
import { createPiecesBarsBackgroundGeometry } from "./create-piece-bars-background-geometry";

const pieceBarsBackgroundGeometry = createPiecesBarsBackgroundGeometry();

export function renderPieceHealthBarGeometry(
	context: Context,
	display: Display,
): void {
	for (const piece of display.pieces) {
		const barsWidth =
			pieceBarsBackgroundGeometry.parameters.width *
			(piece.attributes.health / piece.attributes.maxHealth || 0.001);
		const barsHeight = pieceBarsBackgroundGeometry.parameters.height;

		context.pieceRessources[piece.id].healthBarGeometry ||= new PlaneGeometry(
			barsWidth,
			barsHeight,
		);

		const geometry = context.pieceRessources[piece.id].healthBarGeometry;

		if (!geometry) {
			throw new Error("Health bar geometry not found !");
		}

		if (
			geometry.parameters.width !== barsWidth ||
			geometry.parameters.height !== barsHeight
		) {
			geometry.dispose();
			context.pieceRessources[piece.id].healthBarGeometry = new PlaneGeometry(
				barsWidth,
				barsHeight,
			);
		}
	}

	for (const pieceId of Object.keys(context.pieceRessources)) {
		if (!display.pieces.some((piece) => piece.id === pieceId)) {
			context.pieceRessources[pieceId].healthBarGeometry?.dispose();
			context.pieceRessources[pieceId].healthBarGeometry = undefined;
		}
	}
}
