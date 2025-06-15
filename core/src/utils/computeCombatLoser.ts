import type { Combat } from "../types/Combat.js";
import type { Confrontation } from "../types/Confrontation.js";
import type { PublicKey } from "../types/PublicKey.js";
import { computeConfrontation } from "./computeConfrontation.js";

export function computeCombatLoser(combat: Combat): PublicKey {
	let confrontation: Confrontation = {
		playerAHeroes: combat.playerAHeroes,
		playerBHeroes: combat.playerBHeroes,
	};

	for (const action of combat.actions) {
		confrontation = computeConfrontation(confrontation, action);
	}

	const bWins = !Object.values(confrontation.playerBHeroes).some(
		(h) => h.attributes.health > 0,
	);

	return bWins ? combat.playerBPublicKey : combat.playerAPublicKey;
}
