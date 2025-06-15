import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Font } from "three/examples/jsm/loaders/FontLoader.js";
import fontJson from "three/examples/fonts/helvetiker_bold.typeface.json";
import type { ThreeContext } from "../types/three-context";
import type { Display } from "core/src/types/Display";

export function renderMoneyGeometry(
	threeContext: ThreeContext,
	display: Display,
) {
	const textParams = {
		font: new Font(fontJson),
		size: 0.01,
		depth: 0.0000001,
	};

	const targetText = `${display.money} Gold`;

	if (threeContext.moneyGeometry.userData.text !== targetText) {
		threeContext.moneyGeometry.dispose();
		threeContext.moneyGeometry = new TextGeometry(targetText, textParams);
		threeContext.moneyGeometry.userData.text = targetText;
	}
}
