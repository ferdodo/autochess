import type { Combat } from "../types/Combat.js";
import type { Game } from "../types/Game.js";
import type { PublicKey } from "../types/PublicKey.js";
import { generateActions } from "./generateActions.js";
import { isCombatPlayersEqual } from "./isCombatPlayersEqual.js";
import { randomizeArray } from "./randomizeArray.js";

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
