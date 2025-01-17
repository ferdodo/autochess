import { PlaneGeometry, BoxGeometry, MeshBasicMaterial, Vector3 } from "three";
import { DoubleSide } from "three";
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
import { createRerollGeometry } from "./create-reroll-geometry";
import { crateFullScreenButtonMesh } from "./create-full-screen-button-mesh";
import { loadArena } from "./load-arena";

export async function createContext(): Promise<ThreeContext> {
	const idleAnimationsByAppellations = createIdleAnimationsByAppellations();
	const scene = createScene();
	const camera = createCamera();
	const arena = await loadArena();
	scene.add(arena);

	const pieceTargetBoxesMaterial = new MeshBasicMaterial({
		color: 0x2bfafa,
		transparent: true,
		opacity: 0.4,
	});

	const pieceHighlightActiveMaterial = new MeshBasicMaterial({
		color: 0xffd700,
		side: DoubleSide,
	});

	const pieceHighlightInactiveMaterial = new MeshBasicMaterial({
		color: 0x00aa00,
		side: DoubleSide,
	});

	return {
		benchHeroMeshes: {},
		benchSlotMeshes: createBenchSlotMeshes(scene),
		benchTargetBoxes: {},
		boardPieces: {},
		camera,
		healthGeometry: createHealthGeometry(),
		healthMesh: undefined,
		levelUpBackgroundGeometry: new PlaneGeometry(0.1, 0.04),
		levelUpBackgroundMaterial: new MeshBasicMaterial({ color: 0xffd700 }),
		levelUpBackgroundMesh: undefined,
		levelUpGeometry: undefined,
		levelUpMaterial: new MeshBasicMaterial({ color: 0 }),
		levelUpMesh: undefined,
		moneyGeometry: createMoneyGeometry(),
		moneyMaterial: new MeshBasicMaterial({ color: 0xffd700 }),
		moneyMesh: undefined,
		pieceHighlightActiveMaterial,
		pieceHighlightInactiveMaterial,
		pieceHighlightMeshes: [],
		pieceTargetBoxes: {},
		pieceTargetBoxesGeometry: new BoxGeometry(0.08, 0.05, 0.05),
		pieceTargetBoxesMaterial,
		playerGeometries: [],
		playerMaterial: new MeshBasicMaterial({ color: 0 }),
		playerMeshes: [],
		pointer: new Vector3(),
		pointerHelper: undefined,
		pointerHelperEnabled: true,
		renderer: createRenderer(camera, scene),
		rerollBackgroundGeometry: new PlaneGeometry(0.1, 0.04),
		rerollBackgroundMaterial: new MeshBasicMaterial({ color: 0xffd700 }),
		rerollBackgroundMesh: undefined,
		rerollGeometry: createRerollGeometry(),
		rerollMaterial: new MeshBasicMaterial({ color: 0 }),
		rerollMesh: undefined,
		roundTimeGeometry: new PlaneGeometry(0.1, 0.004),
		roundTimeMaterial: new MeshBasicMaterial({ color: 0xffd700 }),
		roundTimeMesh: undefined,
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
		fullscreenButtonMesh: crateFullScreenButtonMesh(scene, camera),
		transpositionPlane: createTranspositionPlane(scene),
	};
}
