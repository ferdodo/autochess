import { Appellation } from "../types/appellation";
import { Animation } from "../types/animation";
import type { CanvasTexture } from "three";
import { composeAnimatedTexture } from "./compose-animated-texture";
import { loadTexture } from "./load-texture";

export function createPieceAnimatedTexture(
	appellation: Appellation,
	animation: Animation,
): [CanvasTexture, () => void] {
	const framesByAnimations: Record<Appellation, Record<Animation, number>> = {
		[Appellation.Soldier]: {
			[Animation.Idle]: 6,
			[Animation.Attack]: 6,
			[Animation.Walk]: 8,
			[Animation.Ability]: 8,
			[Animation.Hurt]: 4,
			[Animation.Death]: 4,
		},
		[Appellation.Orc]: {
			[Animation.Idle]: 6,
			[Animation.Attack]: 6,
			[Animation.Walk]: 8,
			[Animation.Ability]: 6,
			[Animation.Hurt]: 4,
			[Animation.Death]: 4,
		},
		[Appellation.Lancer]: {
			[Animation.Idle]: 6,
			[Animation.Attack]: 6,
			[Animation.Walk]: 8,
			[Animation.Ability]: 8,
			[Animation.Hurt]: 4,
			[Animation.Death]: 4,
		},
		[Appellation.Priest]: {
			[Animation.Idle]: 6,
			[Animation.Attack]: 9,
			[Animation.Walk]: 8,
			[Animation.Ability]: 6,
			[Animation.Hurt]: 4,
			[Animation.Death]: 4,
		},
		[Appellation.GreatswordSkeleton]: {
			[Animation.Idle]: 6,
			[Animation.Attack]: 9,
			[Animation.Walk]: 9,
			[Animation.Ability]: 12,
			[Animation.Hurt]: 4,
			[Animation.Death]: 4,
		},
		[Appellation.Slime]: {
			[Animation.Idle]: 6,
			[Animation.Attack]: 6,
			[Animation.Walk]: 6,
			[Animation.Ability]: 12,
			[Animation.Hurt]: 4,
			[Animation.Death]: 4,
		},
		[Appellation.EliteOrc]: {
			[Animation.Idle]: 6,
			[Animation.Attack]: 7,
			[Animation.Walk]: 8,
			[Animation.Ability]: 11,
			[Animation.Hurt]: 4,
			[Animation.Death]: 4,
		},
		[Appellation.Wizard]: {
			[Animation.Idle]: 6,
			[Animation.Attack]: 6,
			[Animation.Walk]: 8,
			[Animation.Ability]: 6,
			[Animation.Hurt]: 4,
			[Animation.Death]: 4,
		},
		[Appellation.Werebear]: {
			[Animation.Idle]: 6,
			[Animation.Attack]: 13,
			[Animation.Walk]: 8,
			[Animation.Ability]: 9,
			[Animation.Hurt]: 4,
			[Animation.Death]: 4,
		},
		[Appellation.OrcRider]: {
			[Animation.Idle]: 6,
			[Animation.Attack]: 9,
			[Animation.Walk]: 8,
			[Animation.Ability]: 11,
			[Animation.Hurt]: 4,
			[Animation.Death]: 4,
		},
		[Appellation.KnightTemplar]: {
			[Animation.Idle]: 6,
			[Animation.Attack]: 8,
			[Animation.Walk]: 8,
			[Animation.Ability]: 11,
			[Animation.Hurt]: 4,
			[Animation.Death]: 4,
		},
	};

	switch (animation) {
		case Animation.Idle:
		case Animation.Attack:
		case Animation.Walk:
		case Animation.Ability:
		case Animation.Hurt:
			return composeAnimatedTexture(
				loadTexture(appellation, animation),
				framesByAnimations[appellation][animation],
				loadTexture(appellation, Animation.Idle),
				framesByAnimations[appellation][Animation.Idle],
			);
		case Animation.Death:
			return composeAnimatedTexture(
				loadTexture(appellation, animation),
				framesByAnimations[appellation][animation],
			);
	}
}
