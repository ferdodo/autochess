import type { Appellation } from "../types/Appellation.js";
import { getHeroCost } from "./getHeroCost.js";

export function getHeroBaseHp(appellation: Appellation): number {
	const cost = getHeroCost(appellation);

	switch (cost) {
		case 1:
			return 5;
		case 2:
			return 8;
		case 3:
			return 12;
		default:
			return 5;
	}
}
