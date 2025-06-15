import { MeshBasicMaterial } from "three";
import { Appellation } from "core/src/types/Appellation";
import { createPieceAnimatedTexture } from "./create-piece-animated-texture";
import { Animation } from "core/src/types/Animation";

export function createIdleAnimationsByAppellations(): Record<
	Appellation,
	MeshBasicMaterial
> {
	return Object.values(Appellation).reduce(
		(acc, appellation) => {
			acc[appellation] = new MeshBasicMaterial({
				map: createPieceAnimatedTexture(appellation, Animation.Idle)[0],
				transparent: true,
			});
			return acc;
		},
		{} as Record<Appellation, MeshBasicMaterial>,
	);
}
