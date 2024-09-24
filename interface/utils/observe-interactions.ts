import { merge, fromEvent, debounceTime, map } from "rxjs";
import type { Observable } from "rxjs";
import type { ThreeContext } from "../types/three-context";
import type { Interaction } from "core/types/interaction";
import { Raycaster } from "three";
import type { Display } from "core/types/display";
import type { Vector3 } from "three";

export function observeInteractions(
	threeContext: ThreeContext,
	display: Display,
): Observable<Interaction> {
	const raycaster = new Raycaster();

	return merge(
		merge(
			fromEvent(document, "mousedown").pipe(map(() => true)),
			fromEvent(document, "touchstart").pipe(map(() => true)),
		).pipe(debounceTime(3)),
		merge(
			fromEvent(document, "mouseup").pipe(map(() => false)),
			fromEvent(document, "touchend").pipe(map(() => false)),
		).pipe(debounceTime(3)),
	).pipe(
		map((grabbing: boolean) => {
			const interaction: Interaction = {};
			let positionX: number | null = null;
			let positionY: number | null = null;

			const direction: Vector3 = threeContext.pointer
				.clone()
				.sub(threeContext.camera.position)
				.normalize();

			raycaster.set(threeContext.camera.position, direction);

			for (let x = 0; x < display.board.w; x++) {
				for (let y = 0; y < display.board.h; y++) {
					const index = x + y * display.board.w;
					const targetBox = threeContext.pieceTargetBoxes[index];

					if (!targetBox) {
						throw new Error("Target box not found !");
					}

					if (raycaster.intersectObject(targetBox).length > 0) {
						positionX = x;
						positionY = y;
						break;
					}
				}
			}

			if (grabbing && positionX !== null && positionY !== null) {
				interaction.grabBoardPiece = { positionX, positionY };
			} else if (!grabbing && positionX !== null && positionY !== null) {
				interaction.ungrabBoardPiece = { positionX, positionY };
			}

			return interaction;
		}),
	);
}
