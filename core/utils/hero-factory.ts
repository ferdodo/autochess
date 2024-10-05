import type { Hero } from "../types/hero";
import { uid } from "uid";
import { Appellation } from "../types/appellation";

export class HeroFactory {
	build(): Hero {
		const appellation = Appellation.Knight;

		return {
			id: uid(),
			appellation,
			grade: 0,
			position: {
				x: 0,
				y: 0,
				w: 0,
				h: 0,
			},
			attributes: {
				maxHealth: 100,
				health: 100,
				maxMana: 50,
				mana: 50,
			},
		};
	}
}
