import { Appellation } from "../types/appellation";
import { Animation } from "../types/animation";
import type { CanvasTexture } from "three";
import { composeAnimatedTexture } from "./compose-animated-texture";
import { loadTexture } from "./load-texture";

export function createPieceAnimatedTexture(
	appellation: Appellation,
	animation: Animation,
): [CanvasTexture, () => void] {
	const createTextureFn: Record<
		Appellation,
		Record<Animation, () => [CanvasTexture, () => void]>
	> = {
		[Appellation.Soldier]: {
			[Animation.Idle]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Soldier, Animation.Idle),
					6,
					loadTexture(Appellation.Soldier, Animation.Idle),
					6,
				),
			[Animation.Attack]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Soldier, Animation.Attack),
					6,
					loadTexture(Appellation.Soldier, Animation.Idle),
					6,
				),
			[Animation.Walk]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Soldier, Animation.Walk),
					8,
					loadTexture(Appellation.Soldier, Animation.Walk),
					8,
				),
			[Animation.Ability]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Soldier, Animation.Ability),
					8,
					loadTexture(Appellation.Soldier, Animation.Idle),
					6,
				),
			[Animation.Hurt]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Soldier, Animation.Hurt),
					4,
					loadTexture(Appellation.Soldier, Animation.Idle),
					6,
				),
			[Animation.Death]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Soldier, Animation.Death),
					4,
				),
		},
		[Appellation.Orc]: {
			[Animation.Idle]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Orc, Animation.Idle),
					6,
					loadTexture(Appellation.Orc, Animation.Idle),
					6,
				),
			[Animation.Attack]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Orc, Animation.Attack),
					6,
					loadTexture(Appellation.Orc, Animation.Idle),
					6,
				),
			[Animation.Walk]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Orc, Animation.Walk),
					8,
					loadTexture(Appellation.Orc, Animation.Walk),
					8,
				),
			[Animation.Ability]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Orc, Animation.Ability),
					6,
					loadTexture(Appellation.Orc, Animation.Idle),
					6,
				),
			[Animation.Hurt]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Orc, Animation.Hurt),
					4,
					loadTexture(Appellation.Orc, Animation.Idle),
					6,
				),
			[Animation.Death]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Orc, Animation.Death),
					4,
				),
		},
		[Appellation.Lancer]: {
			[Animation.Idle]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Lancer, Animation.Idle),
					6,
					loadTexture(Appellation.Lancer, Animation.Idle),
					6,
				),
			[Animation.Attack]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Lancer, Animation.Attack),
					6,
					loadTexture(Appellation.Lancer, Animation.Idle),
					6,
				),
			[Animation.Walk]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Lancer, Animation.Walk),
					8,
					loadTexture(Appellation.Lancer, Animation.Walk),
					8,
				),
			[Animation.Ability]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Lancer, Animation.Ability),
					8,
					loadTexture(Appellation.Lancer, Animation.Idle),
					6,
				),
			[Animation.Hurt]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Lancer, Animation.Hurt),
					4,
					loadTexture(Appellation.Lancer, Animation.Idle),
					6,
				),
			[Animation.Death]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Lancer, Animation.Death),
					4,
				),
		},
		[Appellation.Priest]: {
			[Animation.Idle]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Priest, Animation.Idle),
					6,
					loadTexture(Appellation.Priest, Animation.Idle),
					6,
				),
			[Animation.Attack]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Priest, Animation.Attack),
					9,
					loadTexture(Appellation.Priest, Animation.Idle),
					6,
				),
			[Animation.Walk]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Priest, Animation.Walk),
					8,
					loadTexture(Appellation.Priest, Animation.Walk),
					8,
				),
			[Animation.Ability]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Priest, Animation.Ability),
					6,
					loadTexture(Appellation.Priest, Animation.Idle),
					6,
				),
			[Animation.Hurt]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Priest, Animation.Hurt),
					4,
					loadTexture(Appellation.Priest, Animation.Idle),
					6,
				),
			[Animation.Death]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Priest, Animation.Death),
					4,
				),
		},
		[Appellation.GreatswordSkeleton]: {
			[Animation.Idle]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.GreatswordSkeleton, Animation.Idle),
					6,
					loadTexture(Appellation.GreatswordSkeleton, Animation.Idle),
					6,
				),
			[Animation.Attack]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.GreatswordSkeleton, Animation.Attack),
					9,
					loadTexture(Appellation.GreatswordSkeleton, Animation.Idle),
					6,
				),
			[Animation.Walk]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.GreatswordSkeleton, Animation.Walk),
					9,
					loadTexture(Appellation.GreatswordSkeleton, Animation.Walk),
					9,
				),
			[Animation.Ability]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.GreatswordSkeleton, Animation.Ability),
					12,
					loadTexture(Appellation.GreatswordSkeleton, Animation.Idle),
					6,
				),
			[Animation.Hurt]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.GreatswordSkeleton, Animation.Hurt),
					4,
					loadTexture(Appellation.GreatswordSkeleton, Animation.Idle),
					6,
				),
			[Animation.Death]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.GreatswordSkeleton, Animation.Death),
					4,
				),
		},
		[Appellation.Slime]: {
			[Animation.Idle]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Slime, Animation.Idle),
					6,
					loadTexture(Appellation.Slime, Animation.Idle),
					6,
				),
			[Animation.Attack]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Slime, Animation.Attack),
					6,
					loadTexture(Appellation.Slime, Animation.Idle),
					6,
				),
			[Animation.Walk]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Slime, Animation.Walk),
					6,
					loadTexture(Appellation.Slime, Animation.Walk),
					6,
				),
			[Animation.Ability]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Slime, Animation.Ability),
					12,
					loadTexture(Appellation.Slime, Animation.Idle),
					6,
				),
			[Animation.Hurt]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Slime, Animation.Hurt),
					4,
					loadTexture(Appellation.Slime, Animation.Idle),
					6,
				),
			[Animation.Death]: () =>
				composeAnimatedTexture(
					loadTexture(Appellation.Slime, Animation.Death),
					4,
				),
		},
	};

	return createTextureFn[appellation][animation]();
}
