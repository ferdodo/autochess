import { PlaneGeometry, MeshBasicMaterial, CircleGeometry } from "three";
import type { Context } from "../types/context";
import { createScene } from "./create-scene";
import { createCamera } from "./create-camera";
import { Appellation } from "../types/appellation";
import { createPieceAnimatedTexture } from "./create-piece-animated-texture";
import { Animation } from "../types/animation";
import { createShopProductTraitGeometry } from "./create-shop-product-trait-geometry";
import { createBenchSlotMeshes } from "./create-bench-slot-meshes";
import { createShopProductAppellationGeometry } from "./create-shop-product-appellation-geometry";

export function createContext(): Context {
	const map = createPieceAnimatedTexture(
		Appellation.Soldier,
		Animation.Idle,
	)[0];

	const scene = createScene();

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
		scene,
		shopProductBackgroundGeometry: new PlaneGeometry(0.1, 0.15),
		shopProductBackgroundMaterial: new MeshBasicMaterial({ color: 0xffd700 }),
		shopProductBackgroundMeshes: {},
		shopProductImageGeometry: new PlaneGeometry(0.1, 0.1),
		shopProductImageMaterial: {
			[Appellation.Soldier]: new MeshBasicMaterial({ map, transparent: true }),
		},
		shopProductImageMeshes: {},
		shopProductAppellationGeometry: createShopProductAppellationGeometry(),
		shopProductAppellationMaterial: new MeshBasicMaterial({ color: 0 }),
		shopProductAppellationMeshes: {},
		shopProductTraitGeometry: createShopProductTraitGeometry(),
		shopProductTraitMaterial: new MeshBasicMaterial({ color: 0 }),
		shopProductTraitMeshes: {},
		benchSlotMeshes: createBenchSlotMeshes(scene),
	};
}
