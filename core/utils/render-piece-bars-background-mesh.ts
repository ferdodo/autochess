import { Mesh, MeshBasicMaterial } from "three";
import type { Display } from "../types/display";
import type { Context } from "../types/context";
import { createPiecesBarsBackgroundGeometry } from "./create-piece-bars-background-geometry";

const pieceBarsBackgroundGeometry = createPiecesBarsBackgroundGeometry();
const pieceBarsBackgroundMaterial = new MeshBasicMaterial({ color: 0x000000 });

export function renderPieceBarsBackgroundMesh(
	context: Context,
	display: Display,
): void {
	for (const piece of display.pieces) {
		context.pieceRessources[piece.id] ||= {};
		const meshCreated = !context.pieceRessources[piece.id].barBackground;

		const mesh: Mesh =
			context.pieceRessources[piece.id].barBackground ||
			new Mesh(pieceBarsBackgroundGeometry, pieceBarsBackgroundMaterial);

		if (meshCreated) {
			context.pieceRessources[piece.id].barBackground = mesh;
			context.scene.add(mesh);
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

	for (const pieceId of Object.keys(context.pieceRessources)) {
		if (!display.pieces.find((p) => p.id === pieceId)) {
			if (context.pieceRessources[pieceId].barBackground) {
				context.scene.remove(context.pieceRessources[pieceId].barBackground);
				context.pieceRessources[pieceId].barBackground = undefined;
			}
		}
	}
}
