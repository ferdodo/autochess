import type { Hero } from "../types/hero.js";
import { uid } from "uid";
import { getRandomAppellation } from "./get-random-appellation.js";

export class HeroFactory {
	build(appellation = getRandomAppellation()): Hero {
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
