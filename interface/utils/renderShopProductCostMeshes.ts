import { Mesh, Vector3 } from "three";
import type { Display } from "core/src/types/Display.js";
import type { ThreeContext } from "../types/ThreeContext.js";
import { getHeroCost } from "core/src/utils/getHeroCost.js";

export function renderShopProductCostMeshes(
	threeContext: ThreeContext,
	display: Display,
): void {
	for (const [_id, appellation] of Object.entries(display.shop)) {
		const id = String(_id);

		if (!appellation) {
			continue;
		}

		const background = threeContext.shopProductBackgroundMeshes[id];
		const cost = getHeroCost(appellation);

		if (!background) {
			throw new Error("Background not found !");
		}

		const meshCreated = !threeContext.shopProductCostMeshes[id];

		threeContext.shopProductCostMeshes[id] ||= new Mesh(
			threeContext.shopProductCostGeometry[cost],
			threeContext.shopProductCostMaterial,
		);

		const mesh = threeContext.shopProductCostMeshes[id];

		if (meshCreated) {
			threeContext.scene.add(mesh);
			mesh.rotation.x = background.rotation.x;
			mesh.position.x = background.position.x + 0.03;
			const vector = new Vector3(0, -0.065, 0);
			vector.applyEuler(background.rotation);
			mesh.position.y = background.position.y + vector.y;
			mesh.position.z = background.position.z + 0.0001 + vector.z;
		}

		if (mesh.geometry !== threeContext.shopProductCostGeometry[cost]) {
			mesh.geometry = threeContext.shopProductCostGeometry[cost];
		}
	}

	for (const productId of Object.keys(threeContext.shopProductCostMeshes)) {
		const index = Number.parseInt(productId, 10);
		const product = display.shop[index];

		if (!product) {
			const mesh = threeContext.shopProductCostMeshes[productId];

			if (!mesh) {
				throw new Error("Mesh not found !");
			}

			threeContext.scene.remove(mesh);
			delete threeContext.shopProductCostMeshes[productId];
		}
	}
}
