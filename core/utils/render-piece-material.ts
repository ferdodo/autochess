import { MeshBasicMaterial, DoubleSide } from "three";
import type { Piece } from "../types/piece";
import type { Context } from "../types/context";
import type { Display } from "../types/display";

export function renderPieceMaterial(context: Context, display: Display): void {
	for (const piece of display.pieces) {
		if (
			context.pieceMaterials[piece.id]?.map !==
			context.pieceRessources[piece.id]?.animatedTexture?.texture
		) {
			context.pieceMaterials[piece.id]?.dispose();

			context.pieceMaterials[piece.id] = new MeshBasicMaterial({
				map: context.pieceRessources[piece.id]?.animatedTexture?.texture,
				transparent: true,
				side: DoubleSide,
				depthWrite: false,
			});
		}
	}

	for (const pieceId of Object.keys(context.pieceMaterials)) {
		if (display.pieces.find((p: Piece) => p.id === pieceId) === undefined) {
			context.pieceMaterials[pieceId]?.dispose();
			delete context.pieceMaterials[pieceId];
		}
	}
}
