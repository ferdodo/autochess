import { MeshBasicMaterial, DoubleSide } from "three";
import type { Piece } from "../types/piece";
import type { PieceRessources } from "../types/piece-ressources";

export function renderPieceMaterial(
	pieceRessources: PieceRessources,
	piece: Piece | undefined,
): void {
	if (!piece) {
		pieceRessources.material?.dispose();
		pieceRessources.material = undefined;
		return;
	}

	if (
		pieceRessources.material?.map !== pieceRessources?.animatedTexture?.texture
	) {
		pieceRessources.material?.dispose();

		pieceRessources.material = new MeshBasicMaterial({
			map: pieceRessources?.animatedTexture?.texture,
			transparent: true,
			side: DoubleSide,
			depthWrite: false,
		});
	}
}
