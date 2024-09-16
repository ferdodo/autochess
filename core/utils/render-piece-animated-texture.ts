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
		context.boardPieces[piece.id] ||= {
			grades: {},
		};

		if (
			context.boardPieces[piece.id].animatedTexture?.appellation !==
				piece.hero.appellation ||
			context.boardPieces[piece.id].animatedTexture?.animation !==
				piece.animation ||
			context.boardPieces[piece.id].animatedTexture?.animationStartAt !==
				piece.animationStartAt
		) {
			context.boardPieces[piece.id].animatedTexture?.dispose();

			const [texture, dispose]: [CanvasTexture, () => void] =
				createPieceAnimatedTexture(piece.hero.appellation, piece.animation);

			context.boardPieces[piece.id].animatedTexture = {
				texture,
				animationStartAt: piece.animationStartAt,
				appellation: piece.hero.appellation,
				animation: piece.animation,
				dispose,
			};
		}
	}

	for (const pieceId of Object.keys(context.boardPieces)) {
		if (display.pieces.find((p: Piece) => p.id === pieceId) === undefined) {
			context.boardPieces[pieceId].animatedTexture?.dispose();
			context.boardPieces[pieceId].animatedTexture = undefined;
		}
	}
}
