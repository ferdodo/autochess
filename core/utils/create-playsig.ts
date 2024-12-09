import type { Queuer } from "../types/queuer.js";
import type { Playsig } from "../types/playsig.js";

export function createPlaysig(players: Queuer[]): Playsig {
	const sortedPublicKeys = players.map((player) => player.publicKey).sort();
	return sortedPublicKeys.slice(0, 8).join("");
}
