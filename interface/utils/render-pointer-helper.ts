import { ArrowHelper, Vector3, MathUtils, PerspectiveCamera } from "three";
import type { ThreeContext } from "../types/three-context";

const mousePos = new Vector3();

document.addEventListener("mousemove", (event) => {
	mousePos.x = (event.clientX / window.innerWidth) * 2 - 1;
	mousePos.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

document.addEventListener(
	"touchmove",
	(event) => {
		event.preventDefault();
		const touch = event.touches[0];
		mousePos.x = (touch.clientX / window.innerWidth) * 2 - 1;
		mousePos.y = -(touch.clientY / window.innerHeight) * 2 + 1;
	},
	false,
);

export function renderPointerHelper(threeContext: ThreeContext): void {
	if (!threeContext.pointerHelper && threeContext.pointerHelperEnabled) {
		threeContext.pointer = new Vector3();

		threeContext.pointerHelper = new ArrowHelper(
			new Vector3(0, 0, 1),
			threeContext.pointer,
			0.01,
			0xff0000,
		);

		threeContext.scene.add(threeContext.pointerHelper);
	}

	const cameraPosition = threeContext.camera.position;
	const pointerDistance = cameraPosition.length() * 0.1;

	if (threeContext.camera instanceof PerspectiveCamera) {
		const fovRadians = MathUtils.degToRad(threeContext.camera.fov);
		const halfHeight = Math.tan(fovRadians / 2) * pointerDistance;
		const halfWidth = halfHeight * threeContext.camera.aspect;

		const x = mousePos.x * halfWidth;
		const y = mousePos.y * halfHeight;
		const z = -pointerDistance;

		const pointerVector = new Vector3(x, y, z);
		pointerVector.applyMatrix4(threeContext.camera.matrixWorld);

		threeContext.pointer.copy(pointerVector);
		threeContext.pointerHelper?.position.copy(threeContext.pointer);
	}

	if (threeContext.pointerHelper && !threeContext.pointerHelperEnabled) {
		const helper = threeContext.pointerHelper;
		threeContext.scene.remove(threeContext.pointerHelper);
		threeContext.pointerHelper = undefined;
		helper.dispose();
	}
}
