import { PerspectiveCamera, OrthographicCamera } from "three";

export function createCamera(): PerspectiveCamera | OrthographicCamera {
	if (Math.random() > 2) {
		const camera = new PerspectiveCamera(10, 16 / 9, 0.1, 1000);
		camera.position.z = 6;
		camera.position.y = 6;
		camera.rotation.x = -0.75;
		return camera;
	}

	if (Math.random() > 2) {
		const frustumSize = 1;

		const camera = new OrthographicCamera(
			(frustumSize * (16 / 9)) / -2,
			(frustumSize * (16 / 9)) / 2,
			frustumSize / 2,
			frustumSize / -2,
			0.1,
			1000,
		);
		camera.position.z = 3;
		camera.position.y = 3;
		camera.rotation.x = -0.7;
		return camera;
	}

	const camera = new PerspectiveCamera(25, 16 / 9, 0.1, 1000);
	camera.position.z = 2;
	camera.position.y = 2;
	camera.rotation.x = -0.7;
	return camera;
}
