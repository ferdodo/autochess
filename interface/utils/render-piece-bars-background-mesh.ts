import { Mesh, MeshBasicMaterial } from "three";
import { createPiecesBarsBackgroundGeometry } from "./create-piece-bars-background-geometry";
import type { PieceRessources } from "../types/piece-ressources";
import type { Piece } from "core/src/types/Piece";

const pieceBarsBackgroundGeometry = createPiecesBarsBackgroundGeometry();
const pieceBarsBackgroundMaterial = new MeshBasicMaterial({ color: 0x000000 });

export function renderPieceBarsBackgroundMesh(
	pieceRessources: PieceRessources,
	piece: Piece | undefined,
): void {
	if (!piece) {
		if (pieceRessources.barBackground) {
			pieceRessources.group.remove(pieceRessources.barBackground);
			pieceRessources.barBackground = undefined;
		}

		return;
	}

	const meshCreated = !pieceRessources.barBackground;

	const mesh: Mesh =
		pieceRessources.barBackground ||
		new Mesh(pieceBarsBackgroundGeometry, pieceBarsBackgroundMaterial);

	if (meshCreated) {
		pieceRessources.barBackground = mesh;
		pieceRessources.group.add(mesh);
		mesh.position.set(0, 0.11, 0);
	}

	mesh.visible = piece.hero.attributes.health > 0;
}
