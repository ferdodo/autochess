import { Mesh, Vector3 } from "three";
import type { Display } from "core/types/display";
import type { ThreeContext } from "../types/three-context";

export function renderShopProductAppellationMeshes(
	threeContext: ThreeContext,
	display: Display,
): void {
	for (const product of display.shop) {
		const background = threeContext.shopProductBackgroundMeshes[product.id];

		if (!background) {
			throw new Error("Background not found !");
		}

		const meshCreated = !threeContext.shopProductAppellationMeshes[product.id];

		threeContext.shopProductAppellationMeshes[product.id] ||= new Mesh(
			threeContext.shopProductAppellationGeometry[product.appellation],
			threeContext.shopProductAppellationMaterial,
		);

		const mesh = threeContext.shopProductAppellationMeshes[product.id];

		if (meshCreated) {
			threeContext.scene.add(mesh);
			mesh.rotation.x = background.rotation.x;
			mesh.position.x = background.position.x - 0.03;
			const vector = new Vector3(0, 0.055, 0);
			vector.applyEuler(background.rotation);
			mesh.position.y = background.position.y + vector.y;
			mesh.position.z = background.position.z + 0.0001 + vector.z;
		}
	}

	for (const productId of Object.keys(
		threeContext.shopProductAppellationMeshes,
	)) {
		if (!display.shop.find((p) => p.id === productId)) {
			const mesh = threeContext.shopProductAppellationMeshes[productId];

			if (!mesh) {
				throw new Error("Mesh not found !");
			}

			threeContext.scene.remove(mesh);
			delete threeContext.shopProductAppellationMeshes[productId];
		}
	}
}
