import { Raycaster, Vector3 } from "three";
import type { Display } from "core/src/types/Display";
import type { ThreeContext } from "../types/three-context";
import { getBoardBlock } from "core/src/utils/getBoardBlock";
import { Animation } from "core/src/types/Animation";

export function renderBoardPieceMeshes(
	threeContext: ThreeContext,
	display: Display,
): void {
	for (const piece of display.pieces) {
		const pieceRessources = threeContext.boardPieces[piece.hero.id];

		if (!pieceRessources) {
			throw new Error("Piece ressources not found !");
		}

		const cubeSize = 1;
		const pieceSize = 1 / getBoardBlock().w;
		const relativeOriginX = -(cubeSize / 2) + pieceSize / 2;
		const relativeOriginY = cubeSize / 2 + pieceSize / 2;
		const relativeOriginZ = cubeSize / 2 - pieceSize / 2;

		if (
			!pieceRessources.group.position.x &&
			!pieceRessources.group.position.y &&
			!pieceRessources.group.position.z
		) {
			pieceRessources.group.position.set(
				relativeOriginX + pieceSize * piece.hero.position.x,
				relativeOriginY,
				relativeOriginZ - pieceSize * piece.hero.position.y,
			);
		}

		const targetX = relativeOriginX + pieceSize * piece.hero.position.x;
		const targetY = relativeOriginY;
		const targetZ = relativeOriginZ - pieceSize * piece.hero.position.y;
		const timeElapsed = Date.now() - new Date(piece.animationStartAt).getTime();

		if (timeElapsed > 1000 * 0.95) {
			pieceRessources.previousPosition = { x: targetX, y: targetZ, w: 1, h: 1 };
		}

		if (
			pieceRessources.previousPosition &&
			(pieceRessources.previousPosition.x !== piece.hero.position.x ||
				pieceRessources.previousPosition.y !== piece.hero.position.y)
		) {
			const timeRatio = Math.min(1000, timeElapsed) / 1000;

			const x =
				pieceRessources.previousPosition.x +
				(targetX - pieceRessources.previousPosition.x) * timeRatio;

			const y = targetY;

			const z =
				pieceRessources.previousPosition.y +
				(targetZ - pieceRessources.previousPosition.y) * timeRatio;

			pieceRessources.group.position.set(x, y, z);
		} else {
			pieceRessources.group.position.set(targetX, targetY, targetZ);
		}

		const distance = pieceRessources.group.position.distanceTo(
			new Vector3(targetX, targetY, targetZ),
		);

		if (distance > 0.15 || piece.animation !== Animation.Walk) {
			pieceRessources.group.position.set(targetX, targetY, targetZ);
			pieceRessources.previousPosition = { x: targetX, y: targetZ, w: 1, h: 1 };
		}

		if (piece.transposed) {
			const raycaster = new Raycaster();

			const direction = threeContext.pointer
				.clone()
				.sub(threeContext.camera.position)
				.normalize();

			raycaster.set(threeContext.camera.position, direction);

			const intersections = raycaster.intersectObject(
				threeContext.transpositionPlane,
			);

			if (!intersections.length) {
				throw new Error("Failed to intersect selected piece with pointer !");
			}

			const [{ point }] = intersections;
			pieceRessources.group.position.copy(point);
		}
	}
}
