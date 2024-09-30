import { Mesh } from "three";
import type { Display } from "core/types/display";
import type { ThreeContext } from "../types/three-context";

export function renderLevelUpMesh(
	threeContext: ThreeContext,
	_display: Display,
): void {
	const meshCreated = !threeContext.levelUpMesh;

	if (meshCreated) {
		threeContext.levelUpMesh = new Mesh(
			threeContext.levelUpGeometry,
			threeContext.levelUpMaterial,
		);

		const mesh = threeContext.levelUpMesh;

		threeContext.scene.add(mesh);
		mesh.rotation.x = threeContext.camera.rotation.x;
		mesh.position.x = 0.23;
		mesh.position.y = 0.954;
		mesh.position.z = 1;
	}
}
