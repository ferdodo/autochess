import { Mesh } from "three";
import type { Display } from "../types/display";
import type { Context } from "../types/context";
import type { Appellation } from "../types/appellation";

export function renderBenchHeroMeshes(
	context: Context,
	display: Display,
): void {
	for (const [_slotNumber, hero] of Object.entries(display.bench)) {
		const slotNumber = Number.parseInt(_slotNumber);
		const meshCreated = !context.benchHeroMeshes[slotNumber];

		context.benchHeroMeshes[slotNumber] ||= [
			hero.appellation,
			new Mesh(
				context.benchHeroGeometry,
				context.benchHeroMaterials[hero.appellation],
			),
		];

		const [appellation, mesh]: [Appellation, Mesh] =
			context.benchHeroMeshes[slotNumber];
		const slot = context.benchSlotMeshes[slotNumber];

		if (!slot) {
			throw new Error("Slot not found !");
		}

		if (meshCreated) {
			context.scene.add(mesh);
			mesh.position.y = slot.position.y + 0.6;
			mesh.position.z = slot.position.z + 0.05;
			mesh.position.x = slot.position.x;
			mesh.scale.set(0.7, 0.7, 0.7);
		}

		if (appellation !== hero.appellation) {
			mesh.material = context.benchHeroMaterials[hero.appellation];
		}
	}

	for (const [_slotNumber, [_appellation, mesh]] of Object.entries(
		context.benchHeroMeshes,
	)) {
		const slotNumber = Number.parseInt(_slotNumber);

		if (!display.bench[slotNumber]) {
			context.scene.remove(mesh);
			delete context.benchHeroMeshes[slotNumber];
		}
	}
}
