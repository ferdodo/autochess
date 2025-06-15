import { merge, fromEvent, debounceTime, map, filter, delayWhen } from "rxjs";
import type { Observable } from "rxjs";
import type { ThreeContext } from "../types/three-context";
import type { Interaction } from "core/src/types/Interaction";
import { Raycaster } from "three";
import type { Vector3 } from "three";
import { renderCalls$ } from "./render";
import { getBoardBlock } from "core/src/utils/getBoardBlock";

export function observeInteractions(
	threeContext: ThreeContext,
): Observable<Interaction> {
	const raycaster = new Raycaster();

	return merge(
		merge(
			fromEvent(document, "mousedown").pipe(map(() => true)),
			fromEvent(document, "touchstart").pipe(
				map(() => true),
				delayWhen(() => renderCalls$),
			),
		).pipe(debounceTime(3)),
		merge(
			fromEvent(document, "mouseup").pipe(map(() => false)),
			fromEvent(document, "touchend").pipe(
				map(() => false),
				delayWhen(() => renderCalls$),
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
			const board = getBoardBlock();

			for (let x = 0; x < board.w; x++) {
				for (let y = 0; y < board.h; y++) {
					const index = x + y * board.w;
					const targetBox = threeContext.pieceTargetBoxes[index];

					if (!targetBox) {
						return {};
					}

					if (raycaster.intersectObject(targetBox).length > 0) {
						positionX = x;
						positionY = y;
						break;
					}
				}
			}

			if (grabbing && positionX !== undefined && positionY !== undefined) {
				interaction.grabPiece = { positionX, positionY };
			} else if (!grabbing) {
				interaction.ungrabPiece = { positionX, positionY };
			}

			for (const [_index, targetBox] of Object.entries(
				threeContext.benchTargetBoxes,
			)) {
				const position = Number.parseInt(_index);

				if (raycaster.intersectObject(targetBox).length > 0) {
					if (grabbing) {
						interaction.grabPiece = { benchPosition: position };
					} else {
						interaction.ungrabPiece = { benchPosition: position };
					}
				}
			}

			if (grabbing) {
				for (const [_index, shopProductBackgroundMesh] of Object.entries(
					Object.values(threeContext.shopProductBackgroundMeshes),
				)) {
					const index = Number.parseInt(_index);

					if (raycaster.intersectObject(shopProductBackgroundMesh).length > 0) {
						interaction.shopBuy = index;
					}
				}
			}

			if (grabbing && threeContext.rerollBackgroundMesh) {
				if (
					raycaster.intersectObject(threeContext.rerollBackgroundMesh).length >
					0
				) {
					interaction.reroll = true;
				}
			}

			if (grabbing && threeContext.levelUpBackgroundMesh) {
				if (
					raycaster.intersectObject(threeContext.levelUpBackgroundMesh).length >
					0
				) {
					interaction.levelUp = true;
				}
			}

			if (grabbing && threeContext.fullscreenButtonMesh) {
				if (
					raycaster.intersectObject(threeContext.fullscreenButtonMesh).length >
					0
				) {
					interaction.clickFullscreen = true;
				}
			}

			return interaction;
		}),
		filter((interaction) => Object.keys(interaction).length > 0),
	);
}
