import type { Display } from "core/src/types/Display";
import type { ThreeContext } from "../types/ThreeContext";
import { Mesh, Vector3 } from "three";

export function renderSynergyMeshes(
	threeContext: ThreeContext,
	display: Display,
) {
	for (let i = 0; i < display.synergies.length; i++) {
		const meshCreated = !threeContext.synergyMeshes[i];
		const geometry = threeContext.synergiesGeometries[i];

		if (!geometry) {
			throw new Error("Geometry not found !");
		}

		const synergy = display.synergies[i];
		if (synergy === undefined) {
			throw new Error("Synergy not found !");
		}

		const isActive = synergy.count >= synergy.threshold;
		const material = isActive
			? threeContext.activeSynergyMaterial
			: threeContext.inactiveSynergyMaterial;

		const mesh = threeContext.synergyMeshes[i] || new Mesh(geometry, material);

		threeContext.synergyMeshes[i] = mesh;

		if (meshCreated) {
			mesh.rotation.set(
				threeContext.camera.rotation.x,
				threeContext.camera.rotation.y,
				threeContext.camera.rotation.z,
			);

			mesh.position.set(-0.27, 1.37, 1.1);
			threeContext.scene.add(mesh);
			const vector = new Vector3(0, -0.02 * i, 0);
			vector.applyEuler(threeContext.camera.rotation);
			mesh.position.add(vector);
			mesh.scale.set(0.5, 0.5, 0.5);
		}

		if (mesh.geometry.userData.text !== geometry.userData.text) {
			mesh.geometry = geometry;
		}

		mesh.material = material;
	}

	if (threeContext.synergyMeshes.length > display.synergies.length) {
		for (
			let i = display.synergies.length;
			i < threeContext.synergyMeshes.length;
			i++
		) {
			threeContext.scene.remove(threeContext.synergyMeshes[i]);
		}

		threeContext.synergyMeshes = threeContext.synergyMeshes.slice(
			0,
			display.synergies.length,
		);
	}
}
