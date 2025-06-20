import type {
	PlaneGeometry,
	Scene,
	MeshBasicMaterial,
	Mesh,
	PerspectiveCamera,
	OrthographicCamera,
	Vector3,
	ArrowHelper,
	BoxGeometry,
	WebGLRenderer,
} from "three";

import type { Appellation } from "core/src/types/Appellation";
import type { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import type { Trait } from "core/src/types/Trait";
import type { PieceRessources } from "./piece-ressources";

export interface ThreeContext {
	benchHeroMeshes: Record<number, PieceRessources>;
	benchSlotMeshes: Record<number, Mesh>;
	benchTargetBoxes: Record<number, Mesh>;
	boardPieces: Record<string, PieceRessources>;
	camera: PerspectiveCamera | OrthographicCamera;
	healthGeometry: TextGeometry;
	healthMesh?: Mesh;
	levelUpBackgroundGeometry: PlaneGeometry;
	levelUpBackgroundMaterial: MeshBasicMaterial;
	levelUpBackgroundMesh?: Mesh;
	levelUpGeometry?: TextGeometry;
	levelUpMaterial: MeshBasicMaterial;
	levelUpMesh?: Mesh;
	moneyGeometry: TextGeometry;
	moneyMaterial: MeshBasicMaterial;
	moneyMesh?: Mesh;
	pieceHighlightActiveMaterial: MeshBasicMaterial;
	pieceHighlightInactiveMaterial: MeshBasicMaterial;
	pieceHighlightMeshes: Record<number, Mesh>;
	pieceTargetBoxes: Record<number, Mesh>;
	pieceTargetBoxesGeometry: BoxGeometry;
	pieceTargetBoxesMaterial: MeshBasicMaterial;
	playerGeometries: TextGeometry[];
	playerMaterial: MeshBasicMaterial;
	playerMeshes: Mesh[];
	pointer: Vector3;
	pointerHelper?: ArrowHelper;
	pointerHelperEnabled: boolean;
	renderer: WebGLRenderer;
	rerollBackgroundGeometry: PlaneGeometry;
	rerollBackgroundMaterial: MeshBasicMaterial;
	rerollBackgroundMesh?: Mesh;
	rerollGeometry: TextGeometry;
	rerollMaterial: MeshBasicMaterial;
	rerollMesh?: Mesh;
	roundTimeGeometry: PlaneGeometry;
	roundTimeMaterial: MeshBasicMaterial;
	roundTimeMesh?: Mesh;
	scene: Scene;
	shopProductAppellationGeometry: Record<Appellation, TextGeometry>;
	shopProductAppellationMaterial: MeshBasicMaterial;
	shopProductAppellationMeshes: Record<string, Mesh>;
	shopProductBackgroundGeometry: PlaneGeometry;
	shopProductBackgroundMaterial: MeshBasicMaterial;
	shopProductBackgroundMeshes: Record<string, Mesh>;
	shopProductImageGeometry: PlaneGeometry;
	shopProductImageMaterial: Record<Appellation, MeshBasicMaterial>;
	shopProductImageMeshes: Record<string, Mesh>;
	shopProductTraitGeometry: Record<Trait, TextGeometry>;
	shopProductTraitMaterial: MeshBasicMaterial;
	shopProductTraitMeshes: Record<string, Record<number, Mesh>>;
	fullscreenButtonMesh: Mesh;
	transpositionPlane: Mesh;
}
