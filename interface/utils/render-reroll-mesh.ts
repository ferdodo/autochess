import { Mesh } from "three";
import type { Display } from "core/src/types/Display";
import type { ThreeContext } from "../types/three-context";

export function renderRerollMesh(
	threeContext: ThreeContext,
	_display: Display,
): void {
	const meshCreated = !threeContext.rerollMesh;

	if (meshCreated) {
		threeContext.rerollMesh = new Mesh(
			threeContext.rerollGeometry,
			threeContext.rerollMaterial,
		);

		const mesh = threeContext.rerollMesh;

		threeContext.scene.add(mesh);
		mesh.rotation.x = threeContext.camera.rotation.x;
		mesh.position.x = 0.105;
		mesh.position.y = 0.954;
		mesh.position.z = 1;
	}
}
