import { Mesh, Vector3 } from "three";
import type { Display } from "core/src/types/Display";
import type { ThreeContext } from "../types/three-context";

export function renderLevelUpBackgroundMesh(
	threeContext: ThreeContext,
	_display: Display,
): void {
	const meshCreated = !threeContext.levelUpBackgroundMesh;

	if (meshCreated) {
		threeContext.levelUpBackgroundMesh ||= new Mesh(
			threeContext.levelUpBackgroundGeometry,
			threeContext.levelUpBackgroundMaterial,
		);

		const mesh = threeContext.levelUpBackgroundMesh;
		threeContext.scene.add(mesh);
		mesh.position.x = 0.3;
		mesh.position.y = 0.7;
		mesh.position.z = 0.9;
		const move = new Vector3(0, 0.11, 0);
		move.applyQuaternion(threeContext.camera.quaternion);
		mesh.position.add(move);
		mesh.rotation.x = threeContext.camera.rotation.x;
	}
}
