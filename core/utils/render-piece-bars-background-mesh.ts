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
		context.boardPieces[piece.id] ||= {
			grades: {},
		};

		const meshCreated = !context.boardPieces[piece.id].barBackground;

		const mesh: Mesh =
			context.boardPieces[piece.id].barBackground ||
			new Mesh(pieceBarsBackgroundGeometry, pieceBarsBackgroundMaterial);

		if (meshCreated) {
			context.boardPieces[piece.id].barBackground = mesh;
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

	for (const pieceId of Object.keys(context.boardPieces)) {
		if (!display.pieces.find((p) => p.id === pieceId)) {
			if (context.boardPieces[pieceId].barBackground) {
				context.scene.remove(context.boardPieces[pieceId].barBackground);
				context.boardPieces[pieceId].barBackground = undefined;
			}
		}
	}
}
