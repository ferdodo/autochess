import type { Game } from "core/types/game";
import type { GameRepository } from "../repositories/game-repository";

export async function readAllGames(
	gameRepository: GameRepository,
): Promise<Game[]> {
	const games = await gameRepository.find();
	return games;
}
