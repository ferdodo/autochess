import type { Block } from "blockwise";

export function getWindowDimentions(): Block {
	const windowRatio = window.innerWidth / window.innerHeight;

	return {
		w: window.innerWidth,
		h: window.innerHeight,
		x: 0,
		y: 0,
	};
}
