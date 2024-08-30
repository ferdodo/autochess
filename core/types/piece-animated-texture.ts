import type { CanvasTexture } from "three";
import type { Appellation } from "./appellation";
import type { Animation } from "./animation";

export interface PieceAnimatedTexture {
	texture: CanvasTexture;
	animationStartAt: number;
	appellation: Appellation;
	animation: Animation;
	dispose: () => void;
}
