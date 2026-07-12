import { PlaneGeometry } from "three";
import { createPiecesBarsBackgroundGeometry } from "./createPiecesBarsBackgroundGeometry";
import type { PieceRessources } from "../types/PieceRessources";
import type { Piece } from "core/src/types/Piece";

const pieceBarsBackgroundGeometry = createPiecesBarsBackgroundGeometry();

export function renderPieceHealthBarGeometry(
	pieceRessources: PieceRessources,
	piece: Piece | undefined,
): void {
	if (!piece) {
		pieceRessources.healthBarGeometry?.dispose();
		pieceRessources.healthBarGeometry = undefined;
		return;
	}

	const barsWidth =
		pieceBarsBackgroundGeometry.parameters.width *
		(piece.hero.attributes.health / piece.hero.attributes.maxHealth || 0.001);

	const barsHeight = pieceBarsBackgroundGeometry.parameters.height;

	pieceRessources.healthBarGeometry ||= new PlaneGeometry(
		barsWidth,
		barsHeight,
	);

	const geometry = pieceRessources.healthBarGeometry;

	if (!geometry) {
		throw new Error("Health bar geometry not found !");
	}

	if (
		geometry.parameters.width !== barsWidth ||
		geometry.parameters.height !== barsHeight
	) {
		geometry.dispose();
		pieceRessources.healthBarGeometry = new PlaneGeometry(
			barsWidth,
			barsHeight,
		);
	}
}
