import { Raycaster, Mesh } from "three";
import type { Context } from "../types/context";
import type { Vector3 } from "three";
import type { Display } from "../types/display";

export function renderPieceTargetBoxes(
	context: Context,
	display: Display,
): void {
	const raycaster = new Raycaster();
	raycaster.params.Line.threshold = 0.01;

	const direction: Vector3 = context.pointer
		.clone()
		.sub(context.camera.position)
		.normalize();

	raycaster.set(context.camera.position, direction);

	let raycasted = false;

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

			if (!raycasted && raycaster.intersectObject(mesh).length > 0) {
				if (
					display.pieces.some(
						(piece) => piece.position.x === x && piece.position.y === y,
					)
				) {
					mesh.visible = true;
					raycasted = true;
				}
			}
		}
	}
}
