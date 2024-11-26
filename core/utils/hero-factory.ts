import type { Hero } from "../types/hero";
import { uid } from "uid";
import type { Appellation } from "../types/appellation";
import { getRandomAppellation } from "./get-random-appellation";

export class HeroFactory {
	build(): Hero {
		const appellation: Appellation = getRandomAppellation();

		return {
			id: uid(),
			appellation,
			grade: 0,
			position: {
				x: 0,
				y: 0,
				w: 1,
				h: 1,
			},
			attributes: {
				maxHealth: 10,
				health: 10,
				maxMana: 10,
				mana: 10,
			},
		};
	}
}
