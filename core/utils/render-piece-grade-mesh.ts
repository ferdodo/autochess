import { Mesh, CircleGeometry, MeshBasicMaterial } from "three";
import type { PieceRessources } from "../types/piece-ressources";
import type { Piece } from "../types/piece";

const pieceGradeGeometry = new CircleGeometry(0.005, 32);
const pieceGradeMaterial = new MeshBasicMaterial({ color: 0xffd700 });

export function renderPieceGradeMesh(
	pieceRessources: PieceRessources,
	piece: Piece | undefined,
): void {
	if (!piece) {
		for (const key of Object.keys(pieceRessources.grades)) {
			const grade = Number.parseInt(key);
			pieceRessources.group.remove(pieceRessources.grades[grade]);
			delete pieceRessources.grades[grade];
		}

		return;
	}

	for (let i = 0; i < piece.hero.grade; i++) {
		const meshCreated = !pieceRessources.grades?.[i];

		pieceRessources.grades[i] ||= new Mesh(
			pieceGradeGeometry,
			pieceGradeMaterial,
		);

		const mesh: Mesh = pieceRessources.grades[i];

		if (meshCreated) {
			pieceRessources.group.add(mesh);
		}

		const pieceMesh = pieceRessources.mesh;

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
