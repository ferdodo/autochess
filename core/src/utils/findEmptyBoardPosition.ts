import type { Block } from "blockwise";
import type { Game } from "../types/Game.js";
import type { PublicKey } from "../types/PublicKey.js";
import { getBoardBlock } from "./getBoardBlock.js";

export function findEmptyBoardPosition(
	game: Game,
	publicKey: PublicKey,
): Block {
	const heroes = game.playerHeroes[publicKey] || [];
	const board = getBoardBlock();

	for (let x = 0; x < board.w; x++) {
		for (let y = 0; y < board.h; y++) {
			if (
				!heroes.some((hero) => hero.position.x === x && hero.position.y === y)
			) {
				return { x, y, w: 1, h: 1 };
			}
		}
	}

	throw new Error("No empty position found !");
}
