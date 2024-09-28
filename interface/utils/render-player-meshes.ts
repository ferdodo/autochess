import type { Display } from "core/types/display";
import type { ThreeContext } from "../types/three-context";
import { Mesh, Vector3 } from "three";

export function renderplayerMeshes(
	threeContext: ThreeContext,
	display: Display,
) {
	for (let i = 0; i < display.players.length; i++) {
		const meshCreated = !threeContext.playerMeshes[i];
		const geometry = threeContext.playerGeometries[i];

		if (!geometry) {
			throw new Error("Geometry not found !");
		}

		const mesh =
			threeContext.playerMeshes[i] ||
			new Mesh(geometry, threeContext.playerMaterial);

		threeContext.playerMeshes[i] = mesh;

		const currentPlayer = display.players[i];

		if (currentPlayer === undefined) {
			throw new Error("Player not found !");
		}

		const isMe: boolean = currentPlayer[2];

		if (meshCreated) {
			mesh.rotation.set(
				threeContext.camera.rotation.x,
				threeContext.camera.rotation.y,
				threeContext.camera.rotation.z,
			);

			mesh.position.set(0.27, 1.37, 1.1);
			threeContext.scene.add(mesh);
			const vector = new Vector3(0, -0.02 * i, 0);
			vector.applyEuler(threeContext.camera.rotation);
			mesh.position.add(vector);

			if (isMe) {
				mesh.scale.set(1.25, 1.25, 1.25);
			}
		}

		if (mesh.geometry !== geometry) {
			mesh.geometry = geometry;
		}
	}

	if (threeContext.playerMeshes.length > display.players.length) {
		for (
			let i = display.players.length;
			i < threeContext.playerMeshes.length;
			i++
		) {
			threeContext.scene.remove(threeContext.playerMeshes[i]);
		}

		threeContext.playerMeshes = threeContext.playerMeshes.slice(
			0,
			display.players.length,
		);
	}
}
