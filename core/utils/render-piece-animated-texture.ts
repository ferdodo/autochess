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
		if (
			context.pieceAnimatedTextures[piece.id]?.appellation !==
				piece.hero.appellation ||
			context.pieceAnimatedTextures[piece.id]?.animation !== piece.animation ||
			context.pieceAnimatedTextures[piece.id]?.animationStartAt !==
				piece.animationStartAt
		) {
			context.pieceAnimatedTextures[piece.id]?.dispose();

			const [texture, dispose]: [CanvasTexture, () => void] =
				createPieceAnimatedTexture(piece.hero.appellation, piece.animation);

			context.pieceAnimatedTextures[piece.id] = {
				texture,
				animationStartAt: piece.animationStartAt,
				appellation: piece.hero.appellation,
				animation: piece.animation,
				dispose,
			};
		}
	}

	for (const pieceId of Object.keys(context.pieceAnimatedTextures)) {
		if (display.pieces.find((p: Piece) => p.id === pieceId) === undefined) {
			context.pieceAnimatedTextures[pieceId].dispose();
			delete context.pieceAnimatedTextures[pieceId];
		}
	}
}
