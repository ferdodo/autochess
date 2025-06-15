import type { Combat } from "../types/Combat.js";

export function isCombatPlayersEqual(a: Combat, b: Combat): boolean {
	const publicKeys = new Set([
		a.playerAPublicKey,
		a.playerBPublicKey,
		b.playerAPublicKey,
		b.playerBPublicKey,
	]);

	return publicKeys.size === 2;
}
