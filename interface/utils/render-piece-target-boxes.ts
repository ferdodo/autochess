import { Mesh } from "three";
import type { Context } from "../types/context";
import type { Display } from "core/types/display";

export function renderPieceTargetBoxes(
	context: Context,
	display: Display,
): void {
	for (let x = 0; x < display.board.w; x++) {
		for (let y = 0; y < display.board.h; y++) {
			const index = x + y * display.board.w;
			const meshCreated = !context.pieceTargetBoxes[index];

			context.pieceTargetBoxes[index] ||= new Mesh(
				context.pieceTargetBoxesGeometry,
				context.pieceTargetBoxesMaterial,
			);

			const mesh: Mesh = context.pieceTargetBoxes[index];

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

				context.scene.add(mesh);
			}

			mesh.visible = false;
		}
	}
}
