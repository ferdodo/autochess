import { Mesh, Vector3 } from "three";
import type { Display } from "core/src/types/Display";
import type { ThreeContext } from "../types/three-context";

export function renderRerollBackgroundMesh(
	threeContext: ThreeContext,
	_display: Display,
): void {
	const meshCreated = !threeContext.rerollBackgroundMesh;

	if (meshCreated) {
		threeContext.rerollBackgroundMesh ||= new Mesh(
			threeContext.rerollBackgroundGeometry,
			threeContext.rerollBackgroundMaterial,
		);

		const mesh = threeContext.rerollBackgroundMesh;
		threeContext.scene.add(mesh);
		mesh.position.x = 0.15;
		mesh.position.y = 0.7;
		mesh.position.z = 0.9;
		const move = new Vector3(0, 0.11, 0);
		move.applyQuaternion(threeContext.camera.quaternion);
		mesh.position.add(move);
		mesh.rotation.x = threeContext.camera.rotation.x;
	}
}
