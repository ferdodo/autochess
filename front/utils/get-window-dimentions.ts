import type { Block } from "blockwise";
import { getFrontConfig } from "./get-front-config";

export function getWindowDimentions(): Block {
	const windowRatio = window.innerWidth / window.innerHeight;
	const { rendererRatio } = getFrontConfig();

	const w =
		windowRatio < rendererRatio
			? window.innerWidth
			: window.innerHeight * rendererRatio;
	const h =
		windowRatio < rendererRatio
			? window.innerWidth / rendererRatio
			: window.innerHeight;

	return { w, h, x: 0, y: 0 };
}
