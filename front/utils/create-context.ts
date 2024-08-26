import { PlaneGeometry, MeshBasicMaterial, CircleGeometry } from "three";
import type { Context } from "../types/context";
import { createScene } from "./create-scene";
import { createCamera } from "./create-camera";

export function createContext(): Context {
	return {
		camera: createCamera(),
		pieceAnimatedTextures: {},
		pieceBarsBackgroundGeometry: new PlaneGeometry(1, 1),
		pieceBarsBackgroundMaterial: new MeshBasicMaterial({ color: 0x000000 }),
		pieceBarsBackgroundMeshes: {},
		pieceGeometry: new PlaneGeometry(1, 1),
		pieceGradeGeometry: new CircleGeometry(0.005, 32),
		pieceGradeMaterial: new MeshBasicMaterial({ color: 0xffd700 }),
		pieceGradeMeshes: {},
		pieceHealthBarGeometries: {},
		pieceHealthBarMaterial: new MeshBasicMaterial({ color: 0xff0000 }),
		pieceHealthBarMeshes: {},
		pieceMaterials: {},
		pieceMeshes: {},
		shopProductBackgroundGeometry: new PlaneGeometry(0.1, 0.15),
		shopProductBackgroundMaterial: new MeshBasicMaterial({ color: 0xffd700 }),
		shopProductBackgroundMeshes: {},
		scene: createScene(),
	};
}
