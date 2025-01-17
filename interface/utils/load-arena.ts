import ArenaObj from "assets/arena.obj.base64-data-url";
import ArenaMtl from "assets/arena.mtl.base64-data-url";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import type { Object3D } from "three";

const mtlLoader = new MTLLoader();

const objectLoader = new OBJLoader();

export async function loadArena(): Promise<Object3D> {
	const materials: MTLLoader.MaterialCreator = await new Promise((resolve) => {
		mtlLoader.load(ArenaMtl, (mtl) => resolve(mtl));
	});

	materials.preload();
	objectLoader.setMaterials(materials);

	const arena: Object3D = await new Promise((resolve) => {
		objectLoader.load(ArenaObj, (obj) => resolve(obj));
	});

	return arena;
}
