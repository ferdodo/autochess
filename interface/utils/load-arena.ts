import ArenaGLB from "assets/arena.glb.base64-data-url";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import type { Object3D } from "three";

export async function loadArena(): Promise<Object3D> {
	const gltfLoader = new GLTFLoader();

	const arena: Object3D = await new Promise((resolve) => {
		gltfLoader.load(ArenaGLB, (glb) => resolve(glb.scene));
	});

	return arena;
}
