import { Mesh, Vector3 } from "three";
import type { Display } from "../types/display";
import type { Context } from "../types/context";

export function renderShopProductImageMeshes(
	context: Context,
	display: Display,
): void {
	for (const product of display.shop) {
		const meshCreated = !context.shopProductImageMeshes[product.id];

		context.shopProductImageMeshes[product.id] ||= new Mesh(
			context.shopProductImageGeometry,
			context.shopProductImageMaterial[product.appellation],
		);

		const mesh: Mesh = context.shopProductImageMeshes[product.id];
		const background = context.shopProductBackgroundMeshes[product.id];

		if (!background) {
			throw new Error("Background not found !");
		}

		if (meshCreated) {
			context.scene.add(mesh);
			mesh.rotation.x = background.rotation.x;
			mesh.position.y = background.position.y;
			mesh.position.z = background.position.z + 0.0001;
			mesh.position.x = background.position.x;

			const vector = new Vector3(0, 0.01, 0);
			vector.applyEuler(background.rotation);
			mesh.position.y = background.position.y + vector.y;
			mesh.position.z = background.position.z + vector.z;

			mesh.scale.set(3, 3, 3);
		}
	}

	for (const productId of Object.keys(context.shopProductImageMeshes)) {
		if (!display.shop.find((p) => p.id === productId)) {
			context.scene.remove(context.shopProductImageMeshes[productId]);
			delete context.shopProductImageMeshes[productId];
		}
	}
}
