import { Mesh } from "three";
import type { Display } from "../types/display";
import type { Context } from "../types/context";

export function renderPieceHealthBarMeshes(
	context: Context,
	display: Display,
): void {
	for (const piece of display.pieces) {
		const geometry = context.pieceHealthBarGeometries[piece.id];

		if (!geometry) {
			throw new Error("Geometry not found !");
		}

		const meshCreated = !context.pieceHealthBarMeshes[piece.id];

		context.pieceHealthBarMeshes[piece.id] ||= new Mesh(
			geometry,
			context.pieceHealthBarMaterial,
		);

		const mesh: Mesh = context.pieceHealthBarMeshes[piece.id];

		if (geometry !== mesh.geometry) {
			mesh.geometry = geometry;
		}

		if (meshCreated) {
			context.scene.add(mesh);
		}

		const backgroundMesh = context.pieceBarsBackgroundMeshes[piece.id];

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

	for (const pieceId of Object.keys(context.pieceHealthBarMeshes)) {
		if (!display.pieces.find((p) => p.id === pieceId)) {
			context.scene.remove(context.pieceHealthBarMeshes[pieceId]);
			delete context.pieceHealthBarMeshes[pieceId];
		}
	}
}