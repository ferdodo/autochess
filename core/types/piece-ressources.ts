import type { Mesh } from "three";
import type { PieceAnimatedTexture } from "./piece-animated-texture";

export interface PieceRessources {
	barBackground?: Mesh;
	animatedTexture?: PieceAnimatedTexture;
	grades: Record<number, Mesh>;
}
