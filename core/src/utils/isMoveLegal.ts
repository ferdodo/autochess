import { isBlockIncluding, isBlockGroupColliding } from "blockwise";
import type { Block } from "blockwise";
import type { Confrontation } from "../types/Confrontation.js";
import type { Hero } from "../types/Hero.js";
import { getBoardBlock } from "./getBoardBlock.js";
import { revertPosition } from "./revertPosition.js";

export function isMoveLegal(confrontation: Confrontation, hero: Hero) {
	return (move: Block) => {
		const board = getBoardBlock();
		const isATeam = confrontation.playerAHeroes.some((h) => h.id === hero.id);

		if (!isBlockIncluding(board, move)) {
			return false;
		}

		const heroBlocks = [
			...confrontation.playerAHeroes
				.filter((hero) => hero.attributes.health > 0)
				.map((hero) => hero.position)
				.map((pos) => (isATeam ? pos : revertPosition(pos))),
			...confrontation.playerBHeroes
				.filter((hero) => hero.attributes.health > 0)
				.map((hero) => hero.position)
				.map((pos) => (isATeam ? revertPosition(pos) : pos)),
		];

		if (isBlockGroupColliding(heroBlocks, move)) {
			return false;
		}

		return true;
	};
}
