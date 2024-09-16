import { Mesh, CircleGeometry, MeshBasicMaterial } from "three";
import type { Display } from "../types/display";
import type { Context } from "../types/context";

const pieceGradeGeometry = new CircleGeometry(0.005, 32);
const pieceGradeMaterial = new MeshBasicMaterial({ color: 0xffd700 });

export function renderPieceGradeMesh(context: Context, display: Display): void {
	for (const piece of display.pieces) {
		context.pieceRessources[piece.id] ||= {
			grades: {},
		};

		for (let i = 0; i < piece.hero.grade; i++) {
			const meshCreated = !context.pieceRessources[piece.id].grades?.[i];

			context.pieceRessources[piece.id].grades[i] ||= new Mesh(
				pieceGradeGeometry,
				pieceGradeMaterial,
			);

			const mesh: Mesh = context.pieceRessources[piece.id].grades[i];

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
	for (const pieceId of Object.keys(context.pieceRessources)) {
		for (const key of Object.keys(context.pieceRessources[pieceId].grades)) {
			const grade = Number.parseInt(key);
			const piece = display.pieces.find((p) => p.id === pieceId);

			if (!piece || piece.hero.grade < grade) {
				context.scene.remove(context.pieceRessources[pieceId].grades[grade]);
				delete context.pieceRessources[pieceId].grades[grade];
			}
		}
	}
}
