import { MeshBasicMaterial } from "three";
import { Appellation } from "../types/appellation";
import { createPieceAnimatedTexture } from "./create-piece-animated-texture";
import { Animation } from "../types/animation";

export function createIdleAnimationsByAppellations(): Record<
	Appellation,
	MeshBasicMaterial
> {
	return {
		[Appellation.Soldier]: new MeshBasicMaterial({
			map: createPieceAnimatedTexture(Appellation.Soldier, Animation.Idle)[0],
			transparent: true,
		}),
	};
}