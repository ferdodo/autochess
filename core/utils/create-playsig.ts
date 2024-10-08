import type { Queuer } from "../types/queuer";
import type { Playsig } from "../types/playsig";

export function createPlaysig(players: Queuer[]): Playsig {
	const sortedPublicKeys = players.map((player) => player.publicKey).sort();
	return sortedPublicKeys.slice(0, 8).join("");
}
