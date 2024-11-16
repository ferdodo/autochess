import type { Game } from "../types/game";

export function isGameOver(game: Game): boolean {
	return (
		Object.values(game.playerHealths).filter((health) => health > 0).length >= 1
	);
}
