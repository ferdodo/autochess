import { Mesh } from "three";
import type { Display } from "core/types/display";
import type { ThreeContext } from "../types/three-context";

export function renderShopProductBackgroundMeshes(
	threeContext: ThreeContext,
	display: Display,
): void {
	for (const [i, product] of Object.entries(display.shop)) {
		const meshCreated = !threeContext.shopProductBackgroundMeshes[product.id];

		threeContext.shopProductBackgroundMeshes[product.id] ||= new Mesh(
			threeContext.shopProductBackgroundGeometry,
			threeContext.shopProductBackgroundMaterial,
		);

		const mesh: Mesh = threeContext.shopProductBackgroundMeshes[product.id];

		if (meshCreated) {
			threeContext.scene.add(mesh);
			mesh.rotation.x = threeContext.camera.rotation.x;
			mesh.position.y = 0.7;
			mesh.position.z = 0.9;
			const index = Number.parseInt(i);
			mesh.position.x = index * 0.15;
		}
	}

	for (const productId of Object.keys(
		threeContext.shopProductBackgroundMeshes,
	)) {
		if (!display.shop.find((p) => p.id === productId)) {
			threeContext.scene.remove(
				threeContext.shopProductBackgroundMeshes[productId],
			);
			delete threeContext.shopProductBackgroundMeshes[productId];
		}
	}
}
