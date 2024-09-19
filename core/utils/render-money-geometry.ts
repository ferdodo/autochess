import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Font } from "three/examples/jsm/loaders/FontLoader.js";
import fontJson from "three/examples/fonts/helvetiker_bold.typeface.json";
import type { Context } from "../types/context";
import type { Display } from "../types/display";

export function renderMoneyGeometry(context: Context, display: Display) {
	const textParams = {
		font: new Font(fontJson),
		size: 0.01,
		depth: 0.0000001,
	};

	const targetText = `${display.money} Gold`;

	if (context.moneyGeometry.userData.text !== targetText) {
		context.moneyGeometry.dispose();
		context.moneyGeometry = new TextGeometry(targetText, textParams);
		context.moneyGeometry.userData.text = targetText;
	}
}
