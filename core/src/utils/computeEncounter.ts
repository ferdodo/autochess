import type { Encounter } from "../types/Encounter.js";
import type { Game } from "../types/Game.js";
import type { PublicKey } from "../types/PublicKey.js";

export function computeEncounter(
	game: Game,
	publicKey1: PublicKey,
	publicKey2: PublicKey,
): Encounter {
	const player1LostAt =
		game.playerLostAt[publicKey1] || new Date(Date.now() + 10).toISOString();

	const player2LostAt =
		game.playerLostAt[publicKey2] || new Date(Date.now() + 10).toISOString();

	const winnerPublicKey =
		player1LostAt > player2LostAt ? publicKey1 : publicKey2;

	const loserPublicKey =
		player1LostAt > player2LostAt ? publicKey2 : publicKey1;

	return {
		playsig: game.playsig,
		winnerPublicKey,
		loserPublicKey,
		createdAt: new Date().toISOString(),
	};
}
