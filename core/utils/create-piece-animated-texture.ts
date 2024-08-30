import { Appellation } from "../types/appellation";
import { Animation } from "../types/animation";
import type { CanvasTexture } from "three";
import { composeAnimatedTexture } from "./compose-animated-texture";
import { loadTexture } from "./load-texture";

export function createPieceAnimatedTexture(
	appellation: Appellation,
	animation: Animation,
): [CanvasTexture, () => void] {
	switch (appellation) {
		case Appellation.Soldier:
			switch (animation) {
				case Animation.Idle:
					return composeAnimatedTexture(
						loadTexture(Appellation.Soldier, Animation.Idle),
						6,
						loadTexture(Appellation.Soldier, Animation.Idle),
						6,
					);
				case Animation.Attack:
					return composeAnimatedTexture(
						loadTexture(Appellation.Soldier, Animation.Attack),
						6,
						loadTexture(Appellation.Soldier, Animation.Idle),
						6,
					);
				case Animation.Walk:
					return composeAnimatedTexture(
						loadTexture(Appellation.Soldier, Animation.Walk),
						8,
						loadTexture(Appellation.Soldier, Animation.Walk),
						8,
					);
				case Animation.Ability:
					return composeAnimatedTexture(
						loadTexture(Appellation.Soldier, Animation.Ability),
						8,
						loadTexture(Appellation.Soldier, Animation.Idle),
						6,
					);
				case Animation.Hurt:
					return composeAnimatedTexture(
						loadTexture(Appellation.Soldier, Animation.Hurt),
						4,
						loadTexture(Appellation.Soldier, Animation.Idle),
						6,
					);
				case Animation.Death:
					return composeAnimatedTexture(
						loadTexture(Appellation.Soldier, Animation.Death),
						4,
					);
				default:
					throw new Error(`Unknown animation: ${animation}`);
			}
		default:
			throw new Error(`Unknown apellation: ${appellation}`);
	}
}
