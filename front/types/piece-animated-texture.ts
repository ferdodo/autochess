import type { CanvasTexture } from "three";
import type { Appellation } from "core/types/appellation";
import type { Animation } from "core/types/animation";

export interface PieceAnimatedTexture {
	texture: CanvasTexture;
	animationStartAt: number;
	appellation: Appellation;
	animation: Animation;
	dispose: () => void;
}
