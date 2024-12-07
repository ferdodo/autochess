import type { Game } from "core/types/game";
import type { GameRepository } from "../repositories/game-repository";

export async function updateGame(
	gameRepository: GameRepository,
	game: Game,
): Promise<boolean> {
	const playsig = game.playsig;

	if (!playsig) {
		return false;
	}

	const { affected } = await gameRepository.update({ playsig }, game);
	return Boolean(affected);
}
