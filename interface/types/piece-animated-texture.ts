import type { CanvasTexture } from "three";
import type { Appellation } from "core/src/types/Appellation";
import type { Animation } from "core/src/types/Animation";

export interface PieceAnimatedTexture {
	texture: CanvasTexture;
	animationStartAt: number;
	appellation: Appellation;
	animation: Animation;
	dispose: () => void;
}
