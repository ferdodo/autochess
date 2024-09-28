import { PerspectiveCamera } from "three";

export function createCamera(): PerspectiveCamera {
	const windowRatio = window.innerWidth / window.innerHeight;
	const compensationValue = Math.max(0, (-windowRatio + 1.6) / 0.035);
	const fov = 25 + compensationValue;
	const camera = new PerspectiveCamera(fov, windowRatio, 0.1, 1000);
	camera.position.z = 2;
	camera.position.y = 2;
	camera.rotation.x = -0.7;
	return camera;
}
