import type { Game } from "../types/game";
import type { PieceSlot } from "../types/piece-slot";
import type { PublicKey } from "../types/public-key";
import type { Hero } from "../types/hero";

export function findOwnHeroFromSlot(
	game: Game,
	slot: PieceSlot,
	publicKey: PublicKey,
): Hero | undefined {
	if (slot.positionX !== undefined && slot.positionY !== undefined) {
		for (const hero of game.playerHeroes[publicKey]) {
			if (
				hero.position.x === slot.positionX &&
				hero.position.y === slot.positionY
			) {
				return hero;
			}
		}
	}

	if (slot.benchPosition !== undefined) {
		for (const [benchPosition, hero] of Object.entries(
			game.playerBenches[publicKey] || {},
		)) {
			if (benchPosition === slot.benchPosition.toString()) {
				return hero;
			}
		}
	}

	return undefined;
}
