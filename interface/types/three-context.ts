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
} from "three";

import type { Appellation } from "core/types/appellation";
import type { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import type { Trait } from "core/types/trait";
import type { PieceRessources } from "./piece-ressources";

export interface ThreeContext {
	benchHeroMeshes: Record<number, PieceRessources>;
	benchSlotMeshes: Record<number, Mesh>;
	boardPieces: Record<string, PieceRessources>;
	camera: PerspectiveCamera | OrthographicCamera;
	moneyGeometry: TextGeometry;
	moneyMaterial: MeshBasicMaterial;
	moneyMesh?: Mesh;
	healthGeometry: TextGeometry;
	healthMaterial: MeshBasicMaterial;
	healthMesh?: Mesh;
	pieceHighlightMeshes: Mesh;
	pieceTargetBoxes: Record<number, Mesh>;
	pieceTargetBoxesGeometry: BoxGeometry;
	pieceTargetBoxesMaterial: MeshBasicMaterial;
	pointer: Vector3;
	pointerHelper?: ArrowHelper;
	pointerHelperEnabled: boolean;
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
	transpositionPlane: Mesh;
}
