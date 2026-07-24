import { createRenderer } from "./createRenderer";
import { removeRenderer } from "./removeRenderer";
import type { ThreeContext } from "../types/ThreeContext";
import type { Display } from "../../core/src/types/Display";
import { Vector2 } from "three";
import { createCamera } from "./createCamera";

export function renderRenderer(
	threeContext: ThreeContext,
	display: Display,
): void {
	const { windowWidth, windowHeight } = display.viewDisplay;
	const currentSize: Vector2 = threeContext.renderer.getSize(new Vector2());

	const dimensionsChanged =
		windowWidth !== currentSize.x || windowHeight !== currentSize.y;

	if (dimensionsChanged) {
		threeContext.camera = createCamera();
		removeRenderer(threeContext.renderer);

		threeContext.renderer = createRenderer(
			threeContext.camera,
			threeContext.scene,
		);
	}
}
