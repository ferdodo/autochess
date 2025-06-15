import type { Game } from "../types/Game.js";

export function getLevelUpCost(game: Game, publicKey: string): number {
	const level = game.playerLevel[publicKey];

	if (level === undefined) {
		throw new Error("Player level does not exist in game !");
	}

	if (level === 1 || level === 2) {
		return 3;
	}

	let prev = 0;
	let current = 3;
	let next = 3;

	for (let i = 3; i <= level; i++) {
		next = prev + current;
		prev = current;
		current = next;
	}

	return current;
}
