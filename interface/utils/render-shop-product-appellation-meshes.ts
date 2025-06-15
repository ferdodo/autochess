import { Mesh, Vector3 } from "three";
import type { Display } from "core/src/types/Display";
import type { ThreeContext } from "../types/three-context";

export function renderShopProductAppellationMeshes(
	threeContext: ThreeContext,
	display: Display,
): void {
	for (const [_id, appellation] of Object.entries(display.shop)) {
		const id = String(_id);
		const background = threeContext.shopProductBackgroundMeshes[id];

		if (!background) {
			throw new Error("Background not found !");
		}

		const meshCreated = !threeContext.shopProductAppellationMeshes[id];

		threeContext.shopProductAppellationMeshes[id] ||= new Mesh(
			threeContext.shopProductAppellationGeometry[appellation],
			threeContext.shopProductAppellationMaterial,
		);

		const mesh = threeContext.shopProductAppellationMeshes[id];

		if (meshCreated) {
			threeContext.scene.add(mesh);
			mesh.rotation.x = background.rotation.x;
			mesh.position.x = background.position.x - 0.03;
			const vector = new Vector3(0, 0.055, 0);
			vector.applyEuler(background.rotation);
			mesh.position.y = background.position.y + vector.y;
			mesh.position.z = background.position.z + 0.0001 + vector.z;
		}

		if (
			mesh.geometry !== threeContext.shopProductAppellationGeometry[appellation]
		) {
			mesh.geometry = threeContext.shopProductAppellationGeometry[appellation];
		}
	}

	for (const productId of Object.keys(
		threeContext.shopProductAppellationMeshes,
	)) {
		if (!display.shop.find((_p, id) => String(id) === productId)) {
			const mesh = threeContext.shopProductAppellationMeshes[productId];

			if (!mesh) {
				throw new Error("Mesh not found !");
			}

			threeContext.scene.remove(mesh);
			delete threeContext.shopProductAppellationMeshes[productId];
		}
	}
}
