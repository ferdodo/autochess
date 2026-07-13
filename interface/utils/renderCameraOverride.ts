import type { Display } from "core/src/types/Display";
import type { ThreeContext } from "../types/ThreeContext";

export function renderCameraOverride(
	threeContext: ThreeContext,
	display: Display,
): void {
	threeContext.camera.position.x = display.cameraOverride.positionX;
	threeContext.camera.position.y = 2 + display.cameraOverride.positionY;
	threeContext.camera.position.z = 2 + display.cameraOverride.positionZ;
	threeContext.camera.rotation.x = -0.7 + display.cameraOverride.rotationX;
	threeContext.camera.rotation.y = display.cameraOverride.rotationY;
}
