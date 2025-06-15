import type { Hero } from "../types/Hero.js";
import { uid } from "uid";
import { getRandomAppellation } from "./getRandomAppellation.js";

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
				maxHealth: 5,
				health: 5,
				maxMana: 10,
				mana: 10,
			},
		};
	}
}
