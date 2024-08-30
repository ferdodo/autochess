import type { Block } from "blockwise";

export function getWindowDimentions(): Block {
	return {
		w: window.innerWidth,
		h: window.innerHeight,
		x: 0,
		y: 0,
	};
}
