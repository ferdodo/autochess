import { Mesh } from "three";
import type { Display } from "core/types/display";
import type { ThreeContext } from "../types/three-context";

export function renderRoundTimeMesh(
	threeContext: ThreeContext,
	_display: Display,
): void {
	const meshCreated = !threeContext.roundTimeMesh;

	if (meshCreated) {
		threeContext.roundTimeMesh = new Mesh(
			threeContext.roundTimeGeometry,
			threeContext.roundTimeMaterial,
		);

		const mesh = threeContext.roundTimeMesh;

		threeContext.scene.add(mesh);
		mesh.rotation.x = threeContext.camera.rotation.x;
		mesh.position.x = 0;
		mesh.position.y = 0.725;
		mesh.position.z = 0.8;
	}

	if (
		threeContext.roundTimeMesh &&
		threeContext.roundTimeMesh.geometry !== threeContext.roundTimeGeometry
	) {
		threeContext.roundTimeMesh.geometry = threeContext.roundTimeGeometry;
	}
}
