import { PlaneGeometry, BoxGeometry, MeshBasicMaterial, Vector3 } from "three";
import type { ThreeContext } from "../types/three-context";
import { createScene } from "./create-scene";
import { createCamera } from "./create-camera";
import { createShopProductTraitGeometry } from "./create-shop-product-trait-geometry";
import { createBenchSlotMeshes } from "./create-bench-slot-meshes";
import { createShopProductAppellationGeometry } from "./create-shop-product-appellation-geometry";
import { createIdleAnimationsByAppellations } from "./create-idle-animations-by-appellations";
import { createTranspositionPlane } from "./create-transposition-plane";
import { createHighlightMesh } from "./create-highlight-mesh";
import { createMoneyGeometry } from "./create-money-geometry";
import { createHealthGeometry } from "./create-health-geometry";
import { createRenderer } from "./create-renderer";

export function createContext(): ThreeContext {
	const idleAnimationsByAppellations = createIdleAnimationsByAppellations();
	const scene = createScene();
	const camera = createCamera();

	const pieceTargetBoxesMaterial = new MeshBasicMaterial({
		color: 0x2bfafa,
		transparent: true,
		opacity: 0.4,
	});

	return {
		benchHeroMeshes: {},
		benchSlotMeshes: createBenchSlotMeshes(scene),
		boardPieces: {},
		camera: createCamera(),
		healthGeometry: createHealthGeometry(),
		healthMaterial: new MeshBasicMaterial({ color: 0xffd700 }),
		healthMesh: undefined,
		moneyGeometry: createMoneyGeometry(),
		moneyMaterial: new MeshBasicMaterial({ color: 0xffd700 }),
		moneyMesh: undefined,
		pieceHighlightMeshes: createHighlightMesh(scene),
		pieceTargetBoxes: {},
		pieceTargetBoxesGeometry: new BoxGeometry(0.08, 0.05, 0.05),
		pieceTargetBoxesMaterial,
		pointer: new Vector3(),
		pointerHelper: undefined,
		pointerHelperEnabled: true,
		renderer: createRenderer(camera, scene),
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
