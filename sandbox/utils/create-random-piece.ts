import { uid } from "uid";
import { Animation } from "core/types/animation";
import type { Display } from "core/types/display";
import type { Piece } from "core/types/piece";
import { getRandomAppellation } from "../../core/utils/get-random-appellation";

export function createRandomPiece(display: Display): Piece {
	const id = uid();

	return {
		hero: {
			id,
			appellation: getRandomAppellation(),
			grade: Math.floor(Math.random() * 5) + 1,
			position: {
				x: Math.floor(Math.random() * display.board.w),
				y: Math.floor(Math.random() * display.board.w),
				w: 0,
				h: 0,
			},
			attributes: {
				maxHealth: 100,
				health: 100,
				maxMana: 50,
				mana: 50,
			},
		},
		transposed: false,
		animationStartAt: Date.now(),
		animation: Animation.Idle,
		right: Math.random() > 0.5,
	};
}
