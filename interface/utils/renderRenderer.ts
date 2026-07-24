import { createRenderer } from "./createRenderer";
import { removeRenderer } from "./removeRenderer";
import type { ThreeContext } from "../types/ThreeContext";
import type { Display } from "../../core/src/types/Display";
import { Vector2, PerspectiveCamera } from "three";
import { createCamera } from "./createCamera";

export function renderRenderer(
	threeContext: ThreeContext,
	display: Display,
): void {
	const { windowWidth, windowHeight } = display.viewDisplay;
	const { fov } = display.viewDisplay.cameraOverride;
	const currentSize: Vector2 = threeContext.renderer.getSize(new Vector2());
	const currentFov =
		threeContext.camera instanceof PerspectiveCamera
			? threeContext.camera.fov
			: undefined;

	const dimensionsChanged =
		windowWidth !== currentSize.x || windowHeight !== currentSize.y;
	const fovChanged = fov !== currentFov;

	if (dimensionsChanged || fovChanged) {
		threeContext.camera = createCamera(fov);
		removeRenderer(threeContext.renderer);

		threeContext.renderer = createRenderer(
			threeContext.camera,
			threeContext.scene,
		);
	}
}
