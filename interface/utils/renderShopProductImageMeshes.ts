import { Mesh, Vector3 } from "three";
import type { Display } from "core/src/types/Display.js";
import type { ThreeContext } from "../types/ThreeContext.js";

export function renderShopProductImageMeshes(
	threeContext: ThreeContext,
	display: Display,
): void {
	for (const [_id, appellation] of Object.entries(display.shop)) {
		const id = String(_id);

		if (!appellation) {
			continue;
		}

		const meshCreated = !threeContext.shopProductImageMeshes[id];

		threeContext.shopProductImageMeshes[id] ||= new Mesh(
			threeContext.shopProductImageGeometry,
			threeContext.shopProductImageMaterial[appellation],
		);

		const mesh: Mesh = threeContext.shopProductImageMeshes[id];
		const background = threeContext.shopProductBackgroundMeshes[id];

		if (!background) {
			throw new Error("Background not found !");
		}

		if (meshCreated) {
			threeContext.scene.add(mesh);
			mesh.rotation.x = background.rotation.x;
			mesh.position.x = background.position.x;
			const vector = new Vector3(0, 0, 0.001);
			vector.applyEuler(background.rotation);
			mesh.position.y = background.position.y + vector.y;
			mesh.position.z = background.position.z + vector.z;
			mesh.scale.set(2, 2, 2);
		}

		if (mesh.material !== threeContext.shopProductImageMaterial[appellation]) {
			mesh.material = threeContext.shopProductImageMaterial[appellation];
		}
	}

	for (const productId of Object.keys(threeContext.shopProductImageMeshes)) {
		const index = Number.parseInt(productId, 10);
		const product = display.shop[index];

		if (!product) {
			threeContext.scene.remove(threeContext.shopProductImageMeshes[productId]);
			delete threeContext.shopProductImageMeshes[productId];
		}
	}
}
