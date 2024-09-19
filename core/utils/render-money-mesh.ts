import type { Display } from "../types/display";
import type { Context } from "../types/context";
import { Mesh } from "three";

export function renderMoneyMesh(context: Context, _display: Display) {
	const meshCreated = !context.moneyMesh;

	const mesh =
		context.moneyMesh || new Mesh(context.moneyGeometry, context.moneyMaterial);

	context.moneyMesh ||= mesh;

	if (meshCreated) {
		mesh.rotation.set(
			context.camera.rotation.x,
			context.camera.rotation.y,
			context.camera.rotation.z,
		);

		mesh.position.set(-0.03, 1.05, 1.1);

		context.scene.add(mesh);
	}

	if (context.moneyMesh.geometry !== context.moneyGeometry) {
		context.moneyMesh.geometry = context.moneyGeometry;
	}
}
