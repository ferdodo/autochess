import type { Game } from "../types/game";
import type { Combat } from "../types/combat";
import type { PublicKey } from "../types/public-key";
import { generateActions } from "./generate-actions";

export function generateCombats(game: Game): Combat[] {
	const players: PublicKey[] = [];

	for (const [player, health] of Object.entries(game.playerHealths)) {
		if (health > 0) {
			players.push(player);
		}
	}

	const combats: Combat[] = [];

	while (players.length > 1) {
		const player1 = players.pop();
		const player2 = players.pop();

		if (!player1 || !player2) {
			throw new Error("Players not found !");
		}

		const combat: Combat = {
			playerAPublicKey: player1,
			playerBPublicKey: player2,
			playerAHeroes: structuredClone(game.playerHeroes[player1]),
			playerBHeroes: structuredClone(game.playerHeroes[player2]),
			actions: [],
		};

		combat.actions = [...generateActions(combat)];
		combats.push(combat);
	}

	return combats;
}
