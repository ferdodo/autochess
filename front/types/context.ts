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
import type { Appellation } from "core/types/appellation";

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
	shopProductBackgroundGeometry: PlaneGeometry;
	shopProductBackgroundMaterial: MeshBasicMaterial;
	shopProductBackgroundMeshes: Record<string, Mesh>;
	shopProductImageGeometry: PlaneGeometry;
	shopProductImageMaterial: Record<Appellation, MeshBasicMaterial>;
	shopProductImageMeshes: Record<string, Mesh>;
	scene: Scene;
}
