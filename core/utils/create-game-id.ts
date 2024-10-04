import type { Queuer } from "../types/queuer";

export function createGameId(players: Queuer[]): string {
	const sortedPublicKeys = players.map((player) => player.publicKey).sort();
	return sortedPublicKeys.slice(0, 8).join("");
}
