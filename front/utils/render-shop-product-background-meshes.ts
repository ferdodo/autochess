import { Mesh } from "three";
import type { Display } from "core/types/display";
import type { Context } from "../types/context";

export function renderShopProductBackgroundMeshes(
	context: Context,
	display: Display,
): void {
	for (const [i, product] of Object.entries(display.shop)) {
		const meshCreated = !context.shopProductBackgroundMeshes[product.id];

		context.shopProductBackgroundMeshes[product.id] ||= new Mesh(
			context.shopProductBackgroundGeometry,
			context.shopProductBackgroundMaterial,
		);

		const mesh: Mesh = context.shopProductBackgroundMeshes[product.id];

		if (meshCreated) {
			context.scene.add(mesh);
			mesh.rotation.x = context.camera.rotation.x;
			mesh.position.y = 0.7;
			mesh.position.z = 0.9;
			const index = Number.parseInt(i);
			mesh.position.x = index * 0.15;
		}
	}

	for (const productId of Object.keys(context.shopProductBackgroundMeshes)) {
		if (!display.shop.find((p) => p.id === productId)) {
			context.scene.remove(context.shopProductBackgroundMeshes[productId]);
			delete context.shopProductBackgroundMeshes[productId];
		}
	}
}
