import { Raycaster } from "three";
import type { Context } from "../types/context";
import type { Vector3 } from "three";
import type { Display } from "core/types/display";
import { isBlockPositionEqual } from "blockwise";
import type { Block } from "blockwise";

export function renderPieceHighlight(context: Context, display: Display): void {
	const raycaster = new Raycaster();
	raycaster.params.Line.threshold = 0.01;

	const direction: Vector3 = context.pointer
		.clone()
		.sub(context.camera.position)
		.normalize();

	raycaster.set(context.camera.position, direction);
	context.pieceHighlightMeshes.visible = false;

	for (let x = 0; x < display.board.w; x++) {
		for (let y = 0; y < display.board.h; y++) {
			const position: Block = { x, y, w: 0, h: 0 };
			const index = x + y * display.board.w;
			const targetBox = context.pieceTargetBoxes[index];

			if (!targetBox) {
				throw new Error("Target box not found !");
			}

			if (
				raycaster.intersectObject(targetBox).length > 0 &&
				display.pieces
					.map((p) => p.position)
					.some((p) => isBlockPositionEqual(p, position))
			) {
				context.pieceHighlightMeshes.visible = true;
				context.pieceHighlightMeshes.position.copy(targetBox.position);
				context.pieceHighlightMeshes.position.y = 0.501;
				break;
			}
		}
	}
}
