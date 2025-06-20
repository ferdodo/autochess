import type { Block } from "blockwise";
import { getBoardBlock } from "./getBoardBlock.js";

export function revertPosition(block: Block): Block {
	const boardBlock = getBoardBlock();

	return {
		...block,
		x: boardBlock.w - block.x - 1,
		y: boardBlock.h - block.y - 1,
	};
}
