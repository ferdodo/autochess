import type { Game } from "../types/Game.js";
import type { PublicKey } from "../types/PublicKey.js";

export function canBotTransposeToBoard(
	game: Game,
	publicKey: PublicKey,
): boolean {
	const bench = game.playerBenches[publicKey] || {};
	const benchSize = Object.values(bench).filter(Boolean).length;
	const board = game.playerHeroes[publicKey] || [];
	const level = game.playerLevel[publicKey] || 1;
	const boardHasFreeSlots = board.length < level;
	return benchSize > 0 && boardHasFreeSlots;
}
