import type { Display } from "core/types/display";
import type { ThreeContext } from "../types/three-context";
import { Mesh } from "three";

export function renderHealthMesh(
	threeContext: ThreeContext,
	_display: Display,
) {
	const meshCreated = !threeContext.healthMesh;

	const mesh =
		threeContext.healthMesh ||
		new Mesh(threeContext.healthGeometry, threeContext.healthMaterial);

	threeContext.healthMesh ||= mesh;

	if (meshCreated) {
		mesh.rotation.set(
			threeContext.camera.rotation.x,
			threeContext.camera.rotation.y,
			threeContext.camera.rotation.z,
		);

		mesh.position.set(0.095, 1.05, 1.1);

		threeContext.scene.add(mesh);
	}

	if (threeContext.healthMesh.geometry !== threeContext.healthGeometry) {
		threeContext.healthMesh.geometry = threeContext.healthGeometry;
	}
}
