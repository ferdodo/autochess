import type { Combat } from "../types/combat.js";
import type { PublicKey } from "../types/public-key.js";
import type { Confrontation } from "../types/confrontation.js";
import { computeConfrontation } from "./compute-confrontation.js";

export function computeCombatLoser(combat: Combat): PublicKey {
	let confrontation: Confrontation = {
		playerAHeroes: combat.playerAHeroes,
		playerBHeroes: combat.playerBHeroes,
	};

	for (const action of combat.actions) {
		confrontation = computeConfrontation(confrontation, action);
	}

	const aMinHP = Math.min(
		...confrontation.playerAHeroes.map((hero) => hero.attributes.health),
	);
	const bMinHP = Math.min(
		...confrontation.playerBHeroes.map((hero) => hero.attributes.health),
	);

	return aMinHP > bMinHP ? combat.playerBPublicKey : combat.playerAPublicKey;
}
