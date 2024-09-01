import type {
	PlaneGeometry,
	Scene,
	MeshBasicMaterial,
	Mesh,
	CircleGeometry,
	PerspectiveCamera,
	OrthographicCamera,
} from "three";

import type { PieceAnimatedTexture } from "./piece-animated-texture";
import type { Appellation } from "./appellation";
import type { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import type { Trait } from "./trait";

export interface Context {
	camera: PerspectiveCamera | OrthographicCamera;
	pieceAnimatedTextures: Record<string, PieceAnimatedTexture>;
	pieceBarsBackgroundGeometry: PlaneGeometry;
	pieceBarsBackgroundMaterial: MeshBasicMaterial;
	pieceBarsBackgroundMeshes: Record<string, Mesh>;
	pieceGeometry: PlaneGeometry;
	pieceGradeGeometry: CircleGeometry;
	pieceGradeMaterial: MeshBasicMaterial;
	pieceGradeMeshes: Record<string, Record<number, Mesh>>;
	pieceHealthBarGeometries: Record<string, PlaneGeometry>;
	pieceHealthBarMaterial: MeshBasicMaterial;
	pieceHealthBarMeshes: Record<string, Mesh>;
	pieceMaterials: Record<string, MeshBasicMaterial>;
	pieceMeshes: Record<string, Mesh>;
	scene: Scene;
	shopProductBackgroundGeometry: PlaneGeometry;
	shopProductBackgroundMaterial: MeshBasicMaterial;
	shopProductBackgroundMeshes: Record<string, Mesh>;
	shopProductImageGeometry: PlaneGeometry;
	shopProductImageMaterial: Record<Appellation, MeshBasicMaterial>;
	shopProductImageMeshes: Record<string, Mesh>;
	shopProductTraitGeometry: Record<Trait, TextGeometry>;
	shopProductTraitMaterial: MeshBasicMaterial;
	shopProductTraitMeshes: Record<string, Record<number, Mesh>>;
}
