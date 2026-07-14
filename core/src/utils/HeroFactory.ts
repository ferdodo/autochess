import type { Hero } from "../types/Hero.js";
import { uid } from "uid";
import { getRandomAppellation } from "./getRandomAppellation.js";
import { getHeroBaseHp } from "./getHeroBaseHp.js";

export class HeroFactory {
	build(appellation = getRandomAppellation()): Hero {
		const baseHp = getHeroBaseHp(appellation);
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
				maxHealth: baseHp,
				health: baseHp,
				maxMana: 10,
				mana: 10,
			},
		};
	}
}
