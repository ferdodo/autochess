import { PlaneGeometry, MeshBasicMaterial, CircleGeometry } from "three";
import type { Context } from "../types/context";
import { createScene } from "./create-scene";

export function createContext(): Context {
	return {
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
		scene: createScene(),
	};
}
