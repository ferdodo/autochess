import { merge, fromEvent, debounceTime, map, filter, delay } from "rxjs";
import type { Observable } from "rxjs";
import type { ThreeContext } from "../types/three-context";
import type { Interaction } from "core/types/interaction";
import { Raycaster } from "three";
import type { Display } from "core/types/display";
import type { Vector3 } from "three";

/**
 * touchDelay
 *
 * Pospone event to prevent touch interactions
 * to be processed before pointer is positionned
 * from that same touch event.
 **/
const touchDelay = 25;

export function observeInteractions(
	threeContext: ThreeContext,
	display: Display,
): Observable<Interaction> {
	const raycaster = new Raycaster();

	return merge(
		merge(
			fromEvent(document, "mousedown").pipe(map(() => true)),
			fromEvent(document, "touchstart").pipe(
				map(() => true),
				delay(touchDelay),
			),
		).pipe(debounceTime(3)),
		merge(
			fromEvent(document, "mouseup").pipe(map(() => false)),
			fromEvent(document, "touchend").pipe(
				map(() => false),
				delay(touchDelay),
			),
		).pipe(debounceTime(3)),
	).pipe(
		map((grabbing: boolean) => {
			const interaction: Interaction = {};
			let positionX: number | undefined = undefined;
			let positionY: number | undefined = undefined;

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

			if (grabbing && positionX !== undefined && positionY !== undefined) {
				interaction.grabBoardPiece = { positionX, positionY };
			} else if (!grabbing) {
				interaction.ungrabPiece = { positionX, positionY };
			}

			for (const [_index, targetBox] of Object.entries(
				threeContext.benchTargetBoxes,
			)) {
				const position = Number.parseInt(_index);

				if (raycaster.intersectObject(targetBox).length > 0) {
					if (grabbing) {
						interaction.grabBenchPiece = { position };
					} else {
						interaction.ungrabPiece = { benchPosition: position };
					}
				}
			}

			if (grabbing) {
				for (const [productId, shopProductBackgroundMesh] of Object.entries(
					threeContext.shopProductBackgroundMeshes,
				)) {
					if (raycaster.intersectObject(shopProductBackgroundMesh).length > 0) {
						interaction.shopBuy = { productId };
					}
				}
			}

			return interaction;
		}),
		filter((interaction) => Object.keys(interaction).length > 0),
	);
}
