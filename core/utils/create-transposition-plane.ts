import { PlaneGeometry, MeshBasicMaterial, Mesh, DoubleSide } from "three";
import type { Scene } from "three";

export function createTranspositionPlane(scene: Scene): Mesh {
	const transpositionGeometry = new PlaneGeometry(2, 2);

	const transpositionMaterial = new MeshBasicMaterial({
		color: 0x2bfafa,
		side: DoubleSide,
	});

	const mesh = new Mesh(transpositionGeometry, transpositionMaterial);
	scene.add(mesh);
	const quarter = (2 * Math.PI) / 4;
	mesh.rotation.set(quarter, 0, 0);
	mesh.position.y = 0.66;
	mesh.visible = false;
	return mesh;
}
