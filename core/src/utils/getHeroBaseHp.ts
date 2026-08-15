import type { Appellation } from "../types/Appellation.js";
import { getHeroBaseHpByCost } from "./getHeroBaseHpByCost.js";
import { getHeroCost } from "./getHeroCost.js";

export function getHeroBaseHp(appellation: Appellation): number {
	return getHeroBaseHpByCost(getHeroCost(appellation));
}
