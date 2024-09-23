import type { Mesh, PlaneGeometry, MeshBasicMaterial, Group } from "three";
import type { PieceAnimatedTexture } from "./piece-animated-texture";

export interface PieceRessources {
	animatedTexture?: PieceAnimatedTexture;
	barBackground?: Mesh;
	grades: Record<number, Mesh>;
	group: Group;
	healthBarGeometry?: PlaneGeometry;
	healthBarMesh?: Mesh;
	material?: MeshBasicMaterial;
	mesh?: Mesh;
}
