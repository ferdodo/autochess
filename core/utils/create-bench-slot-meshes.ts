import { BoxGeometry, MeshStandardMaterial, Mesh } from "three";

import type { Scene } from "three";

export function createBenchSlotMeshes(scene: Scene): Record<number, Mesh> {
	const cubeSize = 1;
	const smallCubeSize = 0.1;

	const smallCubeGeometry = new BoxGeometry(
		smallCubeSize,
		cubeSize,
		smallCubeSize,
	);

	const smallCubeMaterial = new MeshStandardMaterial({ color: 0x00f800 });

	const meshes: Record<number, Mesh> = {};

	for (let i = 0; i < 6; i++) {
		const smallCube = new Mesh(smallCubeGeometry, smallCubeMaterial);
		scene.add(smallCube);
		meshes[i] = smallCube;
		smallCube.position.x = -0.19 + (i % 3) * -0.13;
		smallCube.position.y = 0.01;
		smallCube.position.z = 0.6 + Math.floor(i / 3) * (smallCubeSize + 0.04);
	}

	return meshes;
}
