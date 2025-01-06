import type { Combat } from "../types/combat.js";
import type { PublicKey } from "../types/public-key.js";
import type { Confrontation } from "../types/confrontation.js";
import { computeConfrontation } from "./compute-confrontation.js";
import { humanReadable } from "./human-readable.js";

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
