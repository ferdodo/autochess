import { MeshBasicMaterial, DoubleSide } from "three";
import type { Piece } from "core/types/piece";
import type { Context } from "../types/context";
import type { Display } from "core/types/display";

export function renderPieceMaterial(context: Context, display: Display): void {
	for (const piece of display.pieces) {
		if (
			context.pieceMaterials[piece.id]?.map !==
			context.pieceAnimatedTextures[piece.id].texture
		) {
			context.pieceMaterials[piece.id]?.dispose();

			context.pieceMaterials[piece.id] = new MeshBasicMaterial({
				map: context.pieceAnimatedTextures[piece.id].texture,
				transparent: true,
				side: DoubleSide,
			});
		}
	}

	for (const pieceId of Object.keys(context.pieceAnimatedTextures)) {
		if (display.pieces.find((p: Piece) => p.id === pieceId) === undefined) {
			context.pieceMaterials[pieceId]?.dispose();
			delete context.pieceMaterials[pieceId];
		}
	}
}
