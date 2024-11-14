import type { Confrontation } from "../types/confrontation";
import { getBoardBlock } from "./get-board-block";
import { isBlockIncluding, isBlockGroupColliding } from "blockwise";
import type { Block } from "blockwise";

export function isMoveLegal(confrontation: Confrontation) {
	return (move: Block) => {
		const board = getBoardBlock();

		if (!isBlockIncluding(board, move)) {
			return false;
		}

		const heroBlocks = [
			...confrontation.playerAHeroes.map((hero) => hero.position),
			...confrontation.playerBHeroes.map((hero) => hero.position),
		];

		if (isBlockGroupColliding(heroBlocks, move)) {
			return false;
		}

		return true;
	};
}
