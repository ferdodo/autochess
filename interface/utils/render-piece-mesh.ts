import { Mesh } from "three";
import { createPieceGeometry } from "./create-piece-geometry";
import type { Piece } from "core/types/piece";
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

	mesh.rotation.set(0, piece.right ? Math.PI : 0, 0);
	const scale = 5.3;
	mesh.scale.set(scale, scale, 1);

	if (piece.hero.attributes.health <= 0) {
		mesh.position.z = -0.005;
	} else {
		mesh.position.z = 0;
	}
}
