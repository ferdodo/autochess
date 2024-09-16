import { Mesh, MeshBasicMaterial } from "three";
import type { Display } from "../types/display";
import type { Context } from "../types/context";

const pieceHealthBarMaterial = new MeshBasicMaterial({ color: 0xff0000 });

export function renderPieceHealthBarMeshes(
	context: Context,
	display: Display,
): void {
	for (const piece of display.pieces) {
		const geometry = context.pieceRessources[piece.id].healthBarGeometry;

		if (!geometry) {
			throw new Error("Geometry not found !");
		}

		const meshCreated = !context.pieceRessources[piece.id].healthBarMesh;

		context.pieceRessources[piece.id].healthBarMesh ||= new Mesh(
			geometry,
			pieceHealthBarMaterial,
		);

		const mesh = context.pieceRessources[piece.id].healthBarMesh;

		if (!mesh) {
			throw new Error("Mesh not found !");
		}

		if (geometry !== mesh.geometry) {
			mesh.geometry = geometry;
		}

		if (meshCreated) {
			context.scene.add(mesh);
		}

		const backgroundMesh = context.pieceRessources[piece.id].barBackground;

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

	for (const pieceId of Object.keys(context.pieceRessources)) {
		if (
			!display.pieces.find((p) => p.id === pieceId) &&
			context.pieceRessources[pieceId].healthBarMesh
		) {
			context.scene.remove(context.pieceRessources[pieceId].healthBarMesh);
			context.pieceRessources[pieceId].healthBarMesh = undefined;
		}
	}
}
