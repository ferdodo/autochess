import { Mesh } from "three";
import type { Display } from "core/src/types/Display";
import type { ThreeContext } from "../types/three-context";

export function renderShopProductBackgroundMeshes(
	threeContext: ThreeContext,
	display: Display,
): void {
	for (const [_id] of Object.entries(display.shop)) {
		const id = String(_id);
		const i = Number.parseInt(id);
		const meshCreated = !threeContext.shopProductBackgroundMeshes[id];

		threeContext.shopProductBackgroundMeshes[id] ||= new Mesh(
			threeContext.shopProductBackgroundGeometry,
			threeContext.shopProductBackgroundMaterial,
		);

		const mesh: Mesh = threeContext.shopProductBackgroundMeshes[id];

		if (meshCreated) {
			threeContext.scene.add(mesh);
			mesh.rotation.x = threeContext.camera.rotation.x;
			mesh.position.y = 0.7;
			mesh.position.z = 0.9;
			mesh.position.x = i * 0.15;
		}
	}

	for (const productId of Object.keys(
		threeContext.shopProductBackgroundMeshes,
	)) {
		if (!display.shop.find((_p, id) => String(id) === productId)) {
			threeContext.scene.remove(
				threeContext.shopProductBackgroundMeshes[productId],
			);
			delete threeContext.shopProductBackgroundMeshes[productId];
		}
	}
}
