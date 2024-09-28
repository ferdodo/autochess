import { Raycaster } from "three";
import type { ThreeContext } from "../types/three-context";
import type { Vector3 } from "three";
import type { Display } from "core/types/display";
import { isBlockPositionEqual } from "blockwise";
import type { Block } from "blockwise";

export function renderPieceHighlight(
	threeContext: ThreeContext,
	display: Display,
): void {
	const raycaster = new Raycaster();
	raycaster.params.Line.threshold = 0.01;

	const direction: Vector3 = threeContext.pointer
		.clone()
		.sub(threeContext.camera.position)
		.normalize();

	raycaster.set(threeContext.camera.position, direction);
	threeContext.pieceHighlightMeshes.visible = false;

	for (let x = 0; x < display.board.w; x++) {
		for (let y = 0; y < display.board.h; y++) {
			const position: Block = { x, y, w: 0, h: 0 };
			const index = x + y * display.board.w;
			const targetBox = threeContext.pieceTargetBoxes[index];

			if (!targetBox) {
				throw new Error("Target box not found !");
			}

			const boardSlotHasPiece = display.pieces
				.map((p) => p.position)
				.some((p) => isBlockPositionEqual(p, position));

			const somePieceIsTransposed = display.pieces.some(
				(piece) => piece.transposed,
			);

			if (
				raycaster.intersectObject(targetBox).length > 0 &&
				(boardSlotHasPiece || somePieceIsTransposed)
			) {
				threeContext.pieceHighlightMeshes.visible = true;
				threeContext.pieceHighlightMeshes.position.copy(targetBox.position);
				threeContext.pieceHighlightMeshes.position.y = 0.501;
				break;
			}
		}
	}

	for (const targetBox of Object.values(threeContext.benchTargetBoxes)) {
		if (raycaster.intersectObject(targetBox).length > 0) {
			threeContext.pieceHighlightMeshes.visible = true;
			threeContext.pieceHighlightMeshes.position.copy(targetBox.position);
			threeContext.pieceHighlightMeshes.position.y = 0.501;
			break;
		}
	}
}
