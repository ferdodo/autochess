import { Mesh, Vector3 } from "three";
import type { Display } from "../types/display";
import type { Context } from "../types/context";
import { getHeroTraits } from "./get-hero-traits";

export function renderShopProductTraitMeshes(
	context: Context,
	display: Display,
): void {
	for (const product of display.shop) {
		const traits = getHeroTraits(product.appellation);
		const background = context.shopProductBackgroundMeshes[product.id];

		if (!background) {
			throw new Error("Background not found !");
		}

		for (const [i, trait] of traits.entries()) {
			const meshCreated = !context.shopProductTraitMeshes[product.id]?.[i];
			context.shopProductTraitMeshes[product.id] ||= {};

			context.shopProductTraitMeshes[product.id][i] ||= new Mesh(
				context.shopProductTraitGeometry[trait],
				context.shopProductTraitMaterial,
			);

			const mesh = context.shopProductTraitMeshes[product.id][i];

			if (meshCreated) {
				context.scene.add(mesh);
				mesh.rotation.x = background.rotation.x;
				mesh.position.x = background.position.x - 0.03;
				const vector = new Vector3(0, -0.04 - 0.017 * i, 0);
				vector.applyEuler(background.rotation);
				mesh.position.y = background.position.y + vector.y;
				mesh.position.z = background.position.z + 0.0001 + vector.z;
			}
		}
	}

	for (const productId of Object.keys(context.shopProductTraitMeshes)) {
		if (!display.shop.find((p) => p.id === productId)) {
			for (const mesh of Object.values(
				context.shopProductTraitMeshes[productId],
			)) {
				context.scene.remove(mesh);
			}

			delete context.shopProductTraitMeshes[productId];
		}
	}
}
