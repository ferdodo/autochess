import type { Display } from "core/types/display";
import type { Context } from "../types/context";
import { Mesh } from "three";

export function renderHealthMesh(context: Context, _display: Display) {
	const meshCreated = !context.healthMesh;

	const mesh =
		context.healthMesh ||
		new Mesh(context.healthGeometry, context.healthMaterial);

	context.healthMesh ||= mesh;

	if (meshCreated) {
		mesh.rotation.set(
			context.camera.rotation.x,
			context.camera.rotation.y,
			context.camera.rotation.z,
		);

		mesh.position.set(0.095, 1.05, 1.1);

		context.scene.add(mesh);
	}

	if (context.healthMesh.geometry !== context.healthGeometry) {
		context.healthMesh.geometry = context.healthGeometry;
	}
}
