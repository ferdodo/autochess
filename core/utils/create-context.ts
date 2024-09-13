import {
	PlaneGeometry,
	BoxGeometry,
	MeshBasicMaterial,
	CircleGeometry,
	Vector3,
} from "three";

import type { Context } from "../types/context";
import { createScene } from "./create-scene";
import { createCamera } from "./create-camera";
import { createShopProductTraitGeometry } from "./create-shop-product-trait-geometry";
import { createBenchSlotMeshes } from "./create-bench-slot-meshes";
import { createShopProductAppellationGeometry } from "./create-shop-product-appellation-geometry";
import { createIdleAnimationsByAppellations } from "./create-idle-animations-by-appellations";
import { createTranspositionPlane } from "./create-transposition-plane";
import { createHighlightMesh } from "./create-highlight-mesh";

export function createContext(): Context {
	const idleAnimationsByAppellations = createIdleAnimationsByAppellations();
	const scene = createScene();

	const pieceTargetBoxesMaterial = new MeshBasicMaterial({
		color: 0x2bfafa,
		transparent: true,
		opacity: 0.4,
	});

	return {
		benchHeroGeometry: new PlaneGeometry(1, 1),
		benchHeroMaterials: idleAnimationsByAppellations,
		benchHeroMeshes: {},
		benchSlotMeshes: createBenchSlotMeshes(scene),
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
		pieceTargetBoxes: {},
		pieceTargetBoxesGeometry: new BoxGeometry(0.08, 0.05, 0.05),
		pieceTargetBoxesMaterial,
		pieceHighlightMeshes: createHighlightMesh(scene),
		pointer: new Vector3(),
		pointerHelper: undefined,
		pointerHelperEnabled: true,
		scene,
		shopProductAppellationGeometry: createShopProductAppellationGeometry(),
		shopProductAppellationMaterial: new MeshBasicMaterial({ color: 0 }),
		shopProductAppellationMeshes: {},
		shopProductBackgroundGeometry: new PlaneGeometry(0.1, 0.15),
		shopProductBackgroundMaterial: new MeshBasicMaterial({ color: 0xffd700 }),
		shopProductBackgroundMeshes: {},
		shopProductImageGeometry: new PlaneGeometry(0.1, 0.1),
		shopProductImageMaterial: idleAnimationsByAppellations,
		shopProductImageMeshes: {},
		shopProductTraitGeometry: createShopProductTraitGeometry(),
		shopProductTraitMaterial: new MeshBasicMaterial({ color: 0 }),
		shopProductTraitMeshes: {},
		transpositionPlane: createTranspositionPlane(scene),
	};
}
