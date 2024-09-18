import { Mesh } from "three";
import { createPieceGeometry } from "./create-piece-geometry";
import type { Piece } from "../types/piece";
import type { PieceRessources } from "../types/piece-ressources";

const pieceGeometry = createPieceGeometry();

export function renderPieceMesh(
	pieceRessources: PieceRessources,
	piece: Piece | undefined,
): void {
	if (!piece) {
		if (pieceRessources.mesh) {
			pieceRessources.group.remove(pieceRessources.mesh);
			pieceRessources.mesh = undefined;
		}

		return;
	}

	const material = pieceRessources.material;

	if (!material) {
		throw new Error("Material not found !");
	}

	const meshCreated = !pieceRessources.mesh;
	pieceRessources.mesh ||= new Mesh(pieceGeometry, material);
	const mesh: Mesh = pieceRessources.mesh;

	if (meshCreated) {
		pieceRessources.group.add(mesh);
	}

	if (mesh.material !== material) {
		mesh.material = material;
	}

	if (meshCreated) {
		mesh.rotation.set(0, piece.right ? Math.PI : 0, 0);
	}

	const scale = 5.3;
	mesh.scale.set(scale, scale, 1);
}
