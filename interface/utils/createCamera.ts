import { PerspectiveCamera } from "three";
import { getCameraCoordinates } from "./getCameraCoordinates";
import { getFov } from "./getFov";
import { getWindowRatio } from "./getWindowRatio";

export function createCamera(fov?: number): PerspectiveCamera {
	const camera = new PerspectiveCamera(
		fov ?? getFov(),
		getWindowRatio(),
		0.1,
		1000,
	);
	const cameraCoordinates = getCameraCoordinates();
	camera.position.z = cameraCoordinates.z;
	camera.position.y = cameraCoordinates.y;
	camera.rotation.x = cameraCoordinates.x;
	return camera;
}
