import { Mesh } from "three";
import type { ThreeContext } from "../types/three-context";
import type { Display } from "core/types/display";

export function renderPieceTargetBoxes(
	threeContext: ThreeContext,
	display: Display,
): void {
	for (let x = 0; x < display.board.w; x++) {
		for (let y = 0; y < display.board.h; y++) {
			const index = x + y * display.board.w;
			const meshCreated = !threeContext.pieceTargetBoxes[index];

			threeContext.pieceTargetBoxes[index] ||= new Mesh(
				threeContext.pieceTargetBoxesGeometry,
				threeContext.pieceTargetBoxesMaterial,
			);

			const mesh: Mesh = threeContext.pieceTargetBoxes[index];

			const cubeSize = 1;
			const pieceSize = cubeSize / display.board.w;
			const relativeOriginX = -(cubeSize / 2) + pieceSize / 2;
			const relativeOriginY = cubeSize / 2 + pieceSize / 2;
			const relativeOriginZ = cubeSize / 2 - pieceSize / 2;

			if (meshCreated) {
				mesh.position.set(
					relativeOriginX + pieceSize * x,
					relativeOriginY,
					relativeOriginZ - pieceSize * y,
				);

				threeContext.scene.add(mesh);
			}

			mesh.visible = false;
		}
	}
}
