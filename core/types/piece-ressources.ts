import type { Mesh, PlaneGeometry } from "three";
import type { PieceAnimatedTexture } from "./piece-animated-texture";

export interface PieceRessources {
	barBackground?: Mesh;
	animatedTexture?: PieceAnimatedTexture;
	healthBarGeometry?: PlaneGeometry;
	healthBarMesh?: Mesh;
	grades: Record<number, Mesh>;
}
