import type { CanvasTexture } from "three";
import type { Piece } from "../types/piece";
import { createPieceAnimatedTexture } from "./create-piece-animated-texture";
import type { PieceRessources } from "../types/piece-ressources";

export function renderPieceAnimatedTexture(
	pieceRessources: PieceRessources,
	piece: Piece | undefined,
): void {
	if (!piece) {
		pieceRessources.animatedTexture?.dispose();
		pieceRessources.animatedTexture = undefined;
		return;
	}

	if (
		pieceRessources.animatedTexture?.appellation !== piece.hero.appellation ||
		pieceRessources.animatedTexture?.animation !== piece.animation ||
		pieceRessources.animatedTexture?.animationStartAt !== piece.animationStartAt
	) {
		pieceRessources.animatedTexture?.dispose();

		const [texture, dispose]: [CanvasTexture, () => void] =
			createPieceAnimatedTexture(piece.hero.appellation, piece.animation);

		pieceRessources.animatedTexture = {
			texture,
			animationStartAt: piece.animationStartAt,
			appellation: piece.hero.appellation,
			animation: piece.animation,
			dispose,
		};
	}
}
