import type { Display } from "core/types/display";
import type { ThreeContext } from "../types/three-context";
import { Mesh } from "three";

export function renderMoneyMesh(threeContext: ThreeContext, _display: Display) {
	const meshCreated = !threeContext.moneyMesh;

	const mesh =
		threeContext.moneyMesh ||
		new Mesh(threeContext.moneyGeometry, threeContext.moneyMaterial);

	threeContext.moneyMesh ||= mesh;

	if (meshCreated) {
		mesh.rotation.set(
			threeContext.camera.rotation.x,
			threeContext.camera.rotation.y,
			threeContext.camera.rotation.z,
		);

		mesh.position.set(-0.03, 1.05, 1.1);

		threeContext.scene.add(mesh);
	}

	if (threeContext.moneyMesh.geometry !== threeContext.moneyGeometry) {
		threeContext.moneyMesh.geometry = threeContext.moneyGeometry;
	}
}
