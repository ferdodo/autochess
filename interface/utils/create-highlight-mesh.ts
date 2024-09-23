import { MeshBasicMaterial, CircleGeometry, Mesh, DoubleSide } from "three";
import type { Scene } from "three";

export function createHighlightMesh(scene: Scene): Mesh {
	const pieceHighlightGeometry = new CircleGeometry(0.02, 32);

	const pieceHighlightMaterial = new MeshBasicMaterial({
		color: 0xffd700,
		side: DoubleSide,
	});

	const mesh = new Mesh(pieceHighlightGeometry, pieceHighlightMaterial);
	const quarter = (2 * Math.PI) / 4;
	mesh.rotation.set(quarter, 0, 0);
	scene.add(mesh);
	return mesh;
}
