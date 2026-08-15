import { getHeroBaseHpByCost } from "./getHeroBaseHpByCost.js";

export function getHpByCost(): Array<{ cost: number; hp: number }> {
	return [
		{ cost: 1, hp: getHeroBaseHpByCost(1) },
		{ cost: 2, hp: getHeroBaseHpByCost(2) },
		{ cost: 3, hp: getHeroBaseHpByCost(3) },
	];
}
