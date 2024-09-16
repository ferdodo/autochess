import type { CanvasTexture } from "three";
import type { Context } from "../types/context";
import type { Piece } from "../types/piece";
import { createPieceAnimatedTexture } from "./create-piece-animated-texture";
import type { Display } from "../types/display";

export function renderPieceAnimatedTexture(
	context: Context,
	display: Display,
): void {
	for (const piece of display.pieces) {
		context.pieceRessources[piece.id] ||= {
			grades: {},
		};

		if (
			context.pieceRessources[piece.id].animatedTexture?.appellation !==
				piece.hero.appellation ||
			context.pieceRessources[piece.id].animatedTexture?.animation !==
				piece.animation ||
			context.pieceRessources[piece.id].animatedTexture?.animationStartAt !==
				piece.animationStartAt
		) {
			context.pieceRessources[piece.id].animatedTexture?.dispose();

			const [texture, dispose]: [CanvasTexture, () => void] =
				createPieceAnimatedTexture(piece.hero.appellation, piece.animation);

			context.pieceRessources[piece.id].animatedTexture = {
				texture,
				animationStartAt: piece.animationStartAt,
				appellation: piece.hero.appellation,
				animation: piece.animation,
				dispose,
			};
		}
	}

	for (const pieceId of Object.keys(context.pieceRessources)) {
		if (display.pieces.find((p: Piece) => p.id === pieceId) === undefined) {
			context.pieceRessources[pieceId].animatedTexture?.dispose();
			context.pieceRessources[pieceId].animatedTexture = undefined;
		}
	}
}
