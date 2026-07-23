import type { Display } from "core/src/types/Display";
import type { ThreeContext } from "../types/ThreeContext";
import { getCameraCoordinates } from "./getCameraCoordinates";

export function renderCameraOverride(
	threeContext: ThreeContext,
	display: Display,
): void {
	threeContext.camera.position.x = display.viewDisplay.cameraOverride.positionX;
	const cameraCoordinates = getCameraCoordinates();
	threeContext.camera.position.y =
		cameraCoordinates.y + display.viewDisplay.cameraOverride.positionY;
	threeContext.camera.position.z =
		cameraCoordinates.z + display.viewDisplay.cameraOverride.positionZ;
	threeContext.camera.rotation.x =
		cameraCoordinates.x + display.viewDisplay.cameraOverride.rotationX;
	threeContext.camera.rotation.y = display.viewDisplay.cameraOverride.rotationY;
}
