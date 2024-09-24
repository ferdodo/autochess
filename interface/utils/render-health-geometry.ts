import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Font } from "three/examples/jsm/loaders/FontLoader.js";
import fontJson from "three/examples/fonts/helvetiker_bold.typeface.json";
import type { ThreeContext } from "../types/three-context";
import type { Display } from "core/types/display";

export function renderHealthGeometry(
	threeContext: ThreeContext,
	display: Display,
) {
	const textParams = {
		font: new Font(fontJson),
		size: 0.01,
		depth: 0.0000001,
	};

	const targetText = `${display.health} Hp`;

	if (threeContext.healthGeometry.userData.text !== targetText) {
		threeContext.healthGeometry.dispose();
		threeContext.healthGeometry = new TextGeometry(targetText, textParams);
		threeContext.healthGeometry.userData.text = targetText;
	}
}
