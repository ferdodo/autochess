import { ArrowHelper, Vector3, MathUtils, PerspectiveCamera } from "three";
import type { Context } from "../types/context";

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

export function renderPointerHelper(context: Context): void {
	if (!context.pointerHelper && context.pointerHelperEnabled) {
		context.pointer = new Vector3();

		context.pointerHelper = new ArrowHelper(
			new Vector3(0, 0, 1),
			context.pointer,
			0.01,
			0xff0000,
		);

		context.scene.add(context.pointerHelper);
	}

	const cameraPosition = context.camera.position;
	const pointerDistance = cameraPosition.length() * 0.1;

	if (context.camera instanceof PerspectiveCamera) {
		const fovRadians = MathUtils.degToRad(context.camera.fov);
		const halfHeight = Math.tan(fovRadians / 2) * pointerDistance;
		const halfWidth = halfHeight * context.camera.aspect;

		const x = mousePos.x * halfWidth;
		const y = mousePos.y * halfHeight;
		const z = -pointerDistance;

		const pointerVector = new Vector3(x, y, z);
		pointerVector.applyMatrix4(context.camera.matrixWorld);

		context.pointer.copy(pointerVector);
		context.pointerHelper?.position.copy(context.pointer);
	}

	if (context.pointerHelper && !context.pointerHelperEnabled) {
		const helper = context.pointerHelper;
		context.scene.remove(context.pointerHelper);
		context.pointerHelper = undefined;
		helper.dispose();
	}
}
