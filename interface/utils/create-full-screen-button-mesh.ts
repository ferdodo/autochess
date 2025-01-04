import { Mesh, PlaneGeometry, MeshBasicMaterial } from "three";
import type { Scene, PerspectiveCamera } from "three";

export function crateFullScreenButtonMesh(
	scene: Scene,
	camera: PerspectiveCamera,
): Mesh {
	const geometry = new PlaneGeometry(0.04, 0.04);
	const material = new MeshBasicMaterial({ color: 0xffd700 });
	const mesh = new Mesh(geometry, material);

	scene.add(mesh);

	mesh.position.x = 0.55;
	mesh.position.y = 0.6755;
	mesh.position.z = 0.95;
	mesh.rotation.x = camera.rotation.x;

	return mesh;
}
