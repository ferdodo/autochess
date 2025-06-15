import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Font } from "three/examples/jsm/loaders/FontLoader.js";
import fontJson from "three/examples/fonts/helvetiker_bold.typeface.json";
import type { ThreeContext } from "../types/three-context";
import type { Display } from "core/src/types/Display";

export function renderLevelUpGeometry(
	threeContext: ThreeContext,
	display: Display,
) {
	const text =
		display.levelUpCost !== null
			? `Level Up (${display.levelUpCost} Gold)`
			: "Level Up";

	if (threeContext.levelUpGeometry?.userData.text !== text) {
		threeContext.levelUpGeometry?.dispose();
		threeContext.levelUpGeometry = undefined;
	}

	if (!threeContext.levelUpGeometry) {
		const font = new Font(fontJson);
		const textParams = { font, size: 0.01, depth: 0.0000001 };
		threeContext.levelUpGeometry = new TextGeometry(text, textParams);
		threeContext.levelUpGeometry.userData.text = text;
	}
}
