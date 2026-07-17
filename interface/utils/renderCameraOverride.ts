import type { Display } from "core/src/types/Display";
import type { ThreeContext } from "../types/ThreeContext";
import { getCameraCoordinates } from "./getCameraCoordinates";

export function renderCameraOverride(
	threeContext: ThreeContext,
	display: Display,
): void {
	threeContext.camera.position.x = display.cameraOverride.positionX;
	const cameraCoordinates = getCameraCoordinates();
	threeContext.camera.position.y =
		cameraCoordinates.y + display.cameraOverride.positionY;
	threeContext.camera.position.z =
		cameraCoordinates.z + display.cameraOverride.positionZ;
	threeContext.camera.rotation.x =
		cameraCoordinates.x + display.cameraOverride.rotationX;
	threeContext.camera.rotation.y = display.cameraOverride.rotationY;
}
