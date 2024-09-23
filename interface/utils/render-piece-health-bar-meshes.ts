import { Mesh, MeshBasicMaterial } from "three";
import type { PieceRessources } from "../types/piece-ressources";
import type { Piece } from "core/types/piece";

const pieceHealthBarMaterial = new MeshBasicMaterial({ color: 0xff0000 });

export function renderPieceHealthBarMeshes(
	pieceRessources: PieceRessources,
	piece: Piece | undefined,
): void {
	if (!piece && pieceRessources.healthBarMesh) {
		pieceRessources.group.remove(pieceRessources.healthBarMesh);
		pieceRessources.healthBarMesh = undefined;
		return;
	}

	const geometry = pieceRessources.healthBarGeometry;

	if (!geometry) {
		throw new Error("Geometry not found !");
	}

	const meshCreated = !pieceRessources.healthBarMesh;

	pieceRessources.healthBarMesh ||= new Mesh(geometry, pieceHealthBarMaterial);

	const mesh = pieceRessources.healthBarMesh;

	if (!mesh) {
		throw new Error("Mesh not found !");
	}

	if (geometry !== mesh.geometry) {
		mesh.geometry = geometry;
	}

	if (meshCreated) {
		pieceRessources.group.add(mesh);
	}

	const backgroundMesh = pieceRessources.barBackground;

	if (!backgroundMesh) {
		throw new Error("Piece mesh not found !");
	}

	const targetX = backgroundMesh.position.x;
	const targetY = backgroundMesh.position.y;
	const targetZ = backgroundMesh.position.z + 0.0001;

	if (
		targetX !== mesh.position.x ||
		targetY !== mesh.position.y ||
		targetZ !== mesh.position.z
	) {
		mesh.position.set(targetX, targetY, targetZ);
	}
}
