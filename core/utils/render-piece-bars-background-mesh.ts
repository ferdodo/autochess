import { Mesh } from "three";
import type { Display } from "../types/display";
import type { Context } from "../types/context";

export function renderPieceBarsBackgroundMesh(
	context: Context,
	display: Display,
): void {
	for (const piece of display.pieces) {
		const material = context.pieceBarsBackgroundMaterial;

		if (!material) {
			throw new Error("Material not found !");
		}

		const meshCreated = !context.pieceBarsBackgroundMeshes[piece.id];

		context.pieceBarsBackgroundMeshes[piece.id] ||= new Mesh(
			context.pieceBarsBackgroundGeometry,
			material,
		);

		const mesh: Mesh = context.pieceBarsBackgroundMeshes[piece.id];

		if (meshCreated) {
			context.scene.add(mesh);
		}

		if (mesh.material !== material) {
			mesh.material = material;
		}

		const pieceMesh = context.pieceMeshes[piece.id];

		if (!pieceMesh) {
			throw new Error("Piece mesh not found !");
		}

		const targetX = pieceMesh.position.x;
		const targetY = pieceMesh.position.y + 0.11;
		const targetZ = pieceMesh.position.z;

		if (
			targetX !== mesh.position.x ||
			targetY !== mesh.position.y ||
			targetZ !== mesh.position.z
		) {
			mesh.position.set(targetX, targetY, targetZ);
		}
	}

	for (const pieceId of Object.keys(context.pieceBarsBackgroundMeshes)) {
		if (!display.pieces.find((p) => p.id === pieceId)) {
			context.scene.remove(context.pieceBarsBackgroundMeshes[pieceId]);
			delete context.pieceBarsBackgroundMeshes[pieceId];
		}
	}
}
