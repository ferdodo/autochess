import type { Game } from "../types/game";

export function isGameInProgress(game: Game): boolean {
	let alivePlayers = 0;

	for (const health of Object.values(game.playerHealths)) {
		if (health > 0) {
			alivePlayers++;
		}

		if (alivePlayers > 1) {
			return true;
		}
	}

	return false;
}
