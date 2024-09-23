import { Mesh, Vector3 } from "three";
import type { Display } from "core/types/display";
import type { Context } from "../types/context";

export function renderShopProductAppellationMeshes(
	context: Context,
	display: Display,
): void {
	for (const product of display.shop) {
		const background = context.shopProductBackgroundMeshes[product.id];

		if (!background) {
			throw new Error("Background not found !");
		}

		const meshCreated = !context.shopProductAppellationMeshes[product.id];

		context.shopProductAppellationMeshes[product.id] ||= new Mesh(
			context.shopProductAppellationGeometry[product.appellation],
			context.shopProductAppellationMaterial,
		);

		const mesh = context.shopProductAppellationMeshes[product.id];

		if (meshCreated) {
			context.scene.add(mesh);
			mesh.rotation.x = background.rotation.x;
			mesh.position.x = background.position.x - 0.03;
			const vector = new Vector3(0, 0.055, 0);
			vector.applyEuler(background.rotation);
			mesh.position.y = background.position.y + vector.y;
			mesh.position.z = background.position.z + 0.0001 + vector.z;
		}
	}

	for (const productId of Object.keys(context.shopProductAppellationMeshes)) {
		if (!display.shop.find((p) => p.id === productId)) {
			const mesh = context.shopProductAppellationMeshes[productId];

			if (!mesh) {
				throw new Error("Mesh not found !");
			}

			context.scene.remove(mesh);
			delete context.shopProductAppellationMeshes[productId];
		}
	}
}
