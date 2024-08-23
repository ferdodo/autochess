import { Mesh } from "three";
import type { Display } from "core/types/display";
import type { Context } from "../types/context";

export function renderPieceGradeMesh(context: Context, display: Display): void {
	for (const piece of display.pieces) {
		context.pieceGradeMeshes[piece.id] ||= {};

		for (let i = 0; i < piece.hero.grade; i++) {
			const meshCreated = !context.pieceGradeMeshes[piece.id]?.[i];

			context.pieceGradeMeshes[piece.id][i] ||= new Mesh(
				context.pieceGradeGeometry,
				context.pieceGradeMaterial,
			);

			const mesh: Mesh = context.pieceGradeMeshes[piece.id][i];

			if (meshCreated) {
				context.scene.add(mesh);
			}

			const pieceMesh = context.pieceMeshes[piece.id];

			if (!pieceMesh) {
				throw new Error("Piece mesh not found !");
			}

			const targetX =
				pieceMesh.position.x + 0.012 * i - (0.012 * (piece.hero.grade - 1)) / 2;
			const targetY = pieceMesh.position.y + 0.095;
			const targetZ = pieceMesh.position.z + 0.001;

			if (
				targetX !== mesh.position.x ||
				targetY !== mesh.position.y ||
				targetZ !== mesh.position.z
			) {
				mesh.position.set(targetX, targetY, targetZ);
			}
		}
	}

	for (const pieceId of Object.keys(context.pieceGradeMeshes)) {
		for (const key of Object.keys(context.pieceGradeMeshes[pieceId])) {
			const grade = Number.parseInt(key);
			const piece = display.pieces.find((p) => p.id === pieceId);

			if (!piece || piece.hero.grade < grade) {
				context.scene.remove(context.pieceGradeMeshes[pieceId][grade]);
				delete context.pieceGradeMeshes[pieceId][grade];
			}
		}
	}
}
