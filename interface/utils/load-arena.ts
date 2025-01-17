import ArenaObj from "assets/arena.obj.base64-data-url";

import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import type { Object3D } from "three";

const objectLoader = new OBJLoader();

export async function loadArena(): Promise<Object3D> {
	return new Promise((resolve) => {
		objectLoader.load(ArenaObj, (obj) => resolve(obj));
	});
}
