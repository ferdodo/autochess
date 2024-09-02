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
		[Appellation.Orc]: new MeshBasicMaterial({
			map: createPieceAnimatedTexture(Appellation.Orc, Animation.Idle)[0],
			transparent: true,
		}),
		[Appellation.Lancer]: new MeshBasicMaterial({
			map: createPieceAnimatedTexture(Appellation.Lancer, Animation.Idle)[0],
			transparent: true,
		}),
		[Appellation.Priest]: new MeshBasicMaterial({
			map: createPieceAnimatedTexture(Appellation.Priest, Animation.Idle)[0],
			transparent: true,
		}),
		[Appellation.GreatswordSkeleton]: new MeshBasicMaterial({
			map: createPieceAnimatedTexture(
				Appellation.GreatswordSkeleton,
				Animation.Idle,
			)[0],
			transparent: true,
		}),
		[Appellation.Slime]: new MeshBasicMaterial({
			map: createPieceAnimatedTexture(Appellation.Slime, Animation.Idle)[0],
			transparent: true,
		}),
		[Appellation.EliteOrc]: new MeshBasicMaterial({
			map: createPieceAnimatedTexture(Appellation.EliteOrc, Animation.Idle)[0],
			transparent: true,
		}),
	};
}
