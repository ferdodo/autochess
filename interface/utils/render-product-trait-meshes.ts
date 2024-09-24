import { Mesh, Vector3 } from "three";
import type { Display } from "core/types/display";
import type { ThreeContext } from "../types/three-context";
import { getHeroTraits } from "core/utils/get-hero-traits";

export function renderShopProductTraitMeshes(
	threeContext: ThreeContext,
	display: Display,
): void {
	for (const product of display.shop) {
		const traits = getHeroTraits(product.appellation);
		const background = threeContext.shopProductBackgroundMeshes[product.id];

		if (!background) {
			throw new Error("Background not found !");
		}

		for (const [i, trait] of traits.entries()) {
			const meshCreated = !threeContext.shopProductTraitMeshes[product.id]?.[i];
			threeContext.shopProductTraitMeshes[product.id] ||= {};

			threeContext.shopProductTraitMeshes[product.id][i] ||= new Mesh(
				threeContext.shopProductTraitGeometry[trait],
				threeContext.shopProductTraitMaterial,
			);

			const mesh = threeContext.shopProductTraitMeshes[product.id][i];

			if (meshCreated) {
				threeContext.scene.add(mesh);
				mesh.rotation.x = background.rotation.x;
				mesh.position.x = background.position.x - 0.03;
				const vector = new Vector3(0, -0.04 - 0.017 * i, 0);
				vector.applyEuler(background.rotation);
				mesh.position.y = background.position.y + vector.y;
				mesh.position.z = background.position.z + 0.0001 + vector.z;
			}
		}
	}

	for (const productId of Object.keys(threeContext.shopProductTraitMeshes)) {
		if (!display.shop.find((p) => p.id === productId)) {
			for (const mesh of Object.values(
				threeContext.shopProductTraitMeshes[productId],
			)) {
				threeContext.scene.remove(mesh);
			}

			delete threeContext.shopProductTraitMeshes[productId];
		}
	}
}
