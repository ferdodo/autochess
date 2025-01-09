import { Raycaster } from "three";
import type { Mesh } from "three";
import type { ThreeContext } from "../types/three-context";
import type { Vector3 } from "three";
import type { Display } from "core/types/display";
import { isBlockPositionEqual } from "blockwise";
import type { Block } from "blockwise";
import { getBoardBlock } from "core/utils/get-board-block";
import { createHighlightMesh } from "./create-highlight-mesh";
import { Phase } from "core/types/phase";

export function renderPieceHighlight(
	threeContext: ThreeContext,
	display: Display,
): void {
	const raycaster = new Raycaster();
	raycaster.params.Line.threshold = 0.01;

	if (display.phase === Phase.Combat) {
		for (const mesh of Object.values(threeContext.pieceHighlightMeshes)) {
			mesh.visible = false;
		}

		return;
	}

	const direction: Vector3 = threeContext.pointer
		.clone()
		.sub(threeContext.camera.position)
		.normalize();

	raycaster.set(threeContext.camera.position, direction);
	const board = getBoardBlock();

	for (let x = 0; x < board.w / 2; x++) {
		for (let y = 0; y < board.h; y++) {
			const index = x + y * board.w;
			const createdHighlightMesh = !threeContext.pieceHighlightMeshes[index];

			const highlightMesh =
				threeContext.pieceHighlightMeshes[index] ||
				createHighlightMesh(threeContext.scene);

			threeContext.pieceHighlightMeshes[index] ||= highlightMesh;

			const position: Block = { x, y, w: 0, h: 0 };
			const targetBox = threeContext.pieceTargetBoxes[index];

			if (!targetBox) {
				throw new Error("Target box not found !");
			}

			const boardSlotHasPiece = display.pieces
				.map((p) => p.hero.position)
				.some((p) => isBlockPositionEqual(p, position));

			const somePieceIsTransposed =
				display.pieces.some((piece) => piece.transposed) ||
				Object.values(display.bench).some((piece) => piece.transposed);

			if (createdHighlightMesh) {
				highlightMesh.position.copy(targetBox.position);
				highlightMesh.position.y = 0.501;
			}

			highlightMesh.visible = true;

			if (
				highlightMesh.material !== threeContext.pieceHighlightInactiveMaterial
			) {
				highlightMesh.material = threeContext.pieceHighlightInactiveMaterial;
			}

			if (
				raycaster.intersectObject(targetBox).length > 0 &&
				(boardSlotHasPiece || somePieceIsTransposed)
			) {
				highlightMesh.material = threeContext.pieceHighlightActiveMaterial;
			}
		}
	}

	const benchHighlightIndex = board.h * board.w + 1;

	const benchHighlight: Mesh =
		threeContext.pieceHighlightMeshes[benchHighlightIndex] ||
		createHighlightMesh(threeContext.scene);

	threeContext.pieceHighlightMeshes[benchHighlightIndex] = benchHighlight;
	benchHighlight.visible = false;

	for (const targetBox of Object.values(threeContext.benchTargetBoxes)) {
		if (raycaster.intersectObject(targetBox).length > 0) {
			benchHighlight.visible = true;
			benchHighlight.position.copy(targetBox.position);
			benchHighlight.position.y = 0.501;
			break;
		}
	}
}
