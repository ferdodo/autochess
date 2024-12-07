import type { Game } from "core/types/game";
import type { GameRepository } from "../repositories/game-repository";
import type { Playsig } from "core/types/playsig";

export async function readGame(
	gameRepository: GameRepository,
	playsig: Playsig,
): Promise<Game | undefined> {
	const game = await gameRepository.findOne({ where: { playsig } });
	return game;
}
