import type {
	PlaneGeometry,
	Scene,
	MeshBasicMaterial,
	Mesh,
	CircleGeometry,
	PerspectiveCamera,
	OrthographicCamera,
	Vector3,
	ArrowHelper,
	BoxGeometry,
} from "three";

import type { Appellation } from "./appellation";
import type { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import type { Trait } from "./trait";
import type { PieceRessources } from "./piece-ressources";

export interface Context {
	benchHeroGeometry: PlaneGeometry;
	benchHeroMaterials: Record<Appellation, MeshBasicMaterial>;
	benchHeroMeshes: Record<number, [Appellation, Mesh]>;
	benchSlotMeshes: Record<number, Mesh>;
	camera: PerspectiveCamera | OrthographicCamera;
	pieceGradeGeometry: CircleGeometry;
	pieceGradeMaterial: MeshBasicMaterial;
	pieceGradeMeshes: Record<string, Record<number, Mesh>>;
	pieceHealthBarGeometries: Record<string, PlaneGeometry>;
	pieceHealthBarMaterial: MeshBasicMaterial;
	pieceHealthBarMeshes: Record<string, Mesh>;
	pieceMaterials: Record<string, MeshBasicMaterial>;
	pieceMeshes: Record<string, Mesh>;
	pieceTargetBoxesGeometry: BoxGeometry;
	pieceTargetBoxesMaterial: MeshBasicMaterial;
	pieceTargetBoxes: Record<number, Mesh>;
	pieceHighlightMeshes: Mesh;
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
	pieceRessources: Record<string, PieceRessources>;
}
