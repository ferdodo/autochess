import { PlaneGeometry, BoxGeometry, MeshBasicMaterial, Vector3 } from "three";
import { DoubleSide } from "three";
import type { ThreeContext } from "../types/ThreeContext";
import { createScene } from "./createScene";
import { createCamera } from "./createCamera";
import { createShopProductTraitGeometry } from "./createShopProductTraitGeometry";
import { createBenchSlotMeshes } from "./createBenchSlotMeshes";
import { createShopProductAppellationGeometry } from "./createShopProductAppellationGeometry";
import { createShopProductCostGeometry } from "./createShopProductCostGeometry";
import { createIdleAnimationsByAppellations } from "./createIdleAnimationsByAppellations";
import { createTranspositionPlane } from "./createTranspositionPlane";
import { createHighlightMesh } from "./createHighlightMesh";
import { createMoneyGeometry } from "./createMoneyGeometry";
import { createHealthGeometry } from "./createHealthGeometry";
import { createRenderer } from "./createRenderer";
import { createRerollGeometry } from "./createRerollGeometry";
import { crateFullScreenButtonMesh } from "./crateFullScreenButtonMesh";
import { loadArena } from "./loadArena";

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
		shopProductCostGeometry: createShopProductCostGeometry(),
		shopProductCostMaterial: new MeshBasicMaterial({ color: 0x000000 }),
		shopProductCostMeshes: {},
		fullscreenButtonMesh: crateFullScreenButtonMesh(scene, camera),
		transpositionPlane: createTranspositionPlane(scene),
	};
}
