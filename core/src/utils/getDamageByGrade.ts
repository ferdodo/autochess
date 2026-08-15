import { getBaseDamage } from "./getBaseDamage.js";
import { getMaxGrade } from "./getMaxGrade.js";

export function getDamageByGrade(): Array<{ grade: number; damage: number }> {
	const damageByGrade: Array<{ grade: number; damage: number }> = [];

	for (let grade = 0; grade <= getMaxGrade(); grade++) {
		damageByGrade.push({ grade, damage: getBaseDamage(grade) });
	}

	return damageByGrade;
}
