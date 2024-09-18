import { Raycaster } from "three";
import type { Display } from "../types/display";
import type { Context } from "../types/context";

export function renderBoardPieceMeshes(
	context: Context,
	display: Display,
): void {
	for (const piece of display.pieces) {
		const pieceRessources = context.boardPieces[piece.id];

		if (!pieceRessources) {
			throw new Error("Piece ressources not found !");
		}

		const cubeSize = 1;
		const pieceSize = 1 / display.board.w;
		const relativeOriginX = -(cubeSize / 2) + pieceSize / 2;
		const relativeOriginY = cubeSize / 2 + pieceSize / 2;
		const relativeOriginZ = cubeSize / 2 - pieceSize / 2;

		if (
			!pieceRessources.group.position.x &&
			!pieceRessources.group.position.y &&
			!pieceRessources.group.position.z
		) {
			pieceRessources.group.position.set(
				relativeOriginX + pieceSize * piece.position.x,
				relativeOriginY,
				relativeOriginZ - pieceSize * piece.position.y,
			);
		}

		const targetX = relativeOriginX + pieceSize * piece.position.x;
		const targetY = relativeOriginY;
		const targetZ = relativeOriginZ - pieceSize * piece.position.y;
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

		if (piece.transposed) {
			const raycaster = new Raycaster();

			const direction = context.pointer
				.clone()
				.sub(context.camera.position)
				.normalize();

			raycaster.set(context.camera.position, direction);

			const intersections = raycaster.intersectObject(
				context.transpositionPlane,
			);

			if (!intersections.length) {
				throw new Error("Failed to intersect selected piece with pointer !");
			}

			const [{ point }] = intersections;
			pieceRessources.group.position.copy(point);
		}
	}
}
