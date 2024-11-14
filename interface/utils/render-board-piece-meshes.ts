import { Raycaster, Vector3 } from "three";
import type { Display } from "core/types/display";
import type { ThreeContext } from "../types/three-context";
import { getBoardBlock } from "core/utils/get-board-block";

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
		const treshold = 0.01;

		const diffX = targetX - pieceRessources.group.position.x;
		const diffY = targetY - pieceRessources.group.position.y;
		const diffZ = targetZ - pieceRessources.group.position.z;

		const moveX =
			diffX > treshold ? treshold : diffX < -treshold ? -treshold : 0;

		const moveY =
			diffY > treshold ? treshold : diffY < -treshold ? -treshold : 0;

		const moveZ =
			diffZ > treshold ? treshold : diffZ < -treshold ? -treshold : 0;

		pieceRessources.group.position.set(
			pieceRessources.group.position.x + moveX,
			pieceRessources.group.position.y + moveY,
			pieceRessources.group.position.z + moveZ,
		);

		const distance = pieceRessources.group.position.distanceTo(
			new Vector3(targetX, targetY, targetZ),
		);

		if (distance > 0.15) {
			pieceRessources.group.position.set(targetX, targetY, targetZ);
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
