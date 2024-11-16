import type { Combat } from "../types/combat";
import type { PublicKey } from "../types/public-key";
import type { Confrontation } from "../types/confrontation";
import { computeConfrontation } from "./compute-confrontation";

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
