import { PerspectiveCamera } from "three";

export function createCamera(): PerspectiveCamera {
	const windowRatio = window.innerWidth / window.innerHeight;
	const compensationValue = Math.max(0, (-windowRatio + 1.6) / 0.055) ** 1.3;
	const fov = 25 + compensationValue;
	return new PerspectiveCamera(fov, windowRatio, 0.1, 1000);
}
