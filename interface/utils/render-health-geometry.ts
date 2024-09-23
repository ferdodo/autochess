import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Font } from "three/examples/jsm/loaders/FontLoader.js";
import fontJson from "three/examples/fonts/helvetiker_bold.typeface.json";
import type { Context } from "../types/context";
import type { Display } from "core/types/display";

export function renderHealthGeometry(context: Context, display: Display) {
	const textParams = {
		font: new Font(fontJson),
		size: 0.01,
		depth: 0.0000001,
	};

	const targetText = `${display.health} Hp`;

	if (context.healthGeometry.userData.text !== targetText) {
		context.healthGeometry.dispose();
		context.healthGeometry = new TextGeometry(targetText, textParams);
		context.healthGeometry.userData.text = targetText;
	}
}
