import type { Game } from "../types/game.js";
import type { Combat } from "../types/combat.js";
import type { PublicKey } from "../types/public-key.js";
import { generateActions } from "./generate-actions.js";
import { randomizeArray } from "./randomize-array.js";
import { isCombatPlayersEqual } from "./is-combat-players-equal.js";

export async function generateCombats(game: Game): Promise<Combat[]> {
	let players: PublicKey[] = [];

	for (const [player, health] of Object.entries(game.playerHealths)) {
		if (health > 0) {
			players.push(player);
		}
	}

	const combats: Combat[] = [];
	players = randomizeArray(players);

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

		if (
			players.length > 3 &&
			(game.previousCombats || []).some((previous) =>
				isCombatPlayersEqual(previous, combat),
			)
		) {
			continue;
		}

		combat.actions = [];

		for await (const action of generateActions(combat)) {
			combat.actions.push(action);
		}

		combats.push(combat);
	}

	return combats;
}
