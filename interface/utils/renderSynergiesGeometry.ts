import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Font } from "three/examples/jsm/loaders/FontLoader.js";
import fontJson from "three/examples/fonts/helvetiker_bold.typeface.json";
import type { ThreeContext } from "../types/ThreeContext";
import type { Display } from "core/src/types/Display";

export function renderSynergiesGeometry(
	threeContext: ThreeContext,
	display: Display,
) {
	const textParams = {
		font: new Font(fontJson),
		size: 0.01,
		depth: 0.0000001,
	};

	for (const [_i, synergy] of Object.entries(display.synergies)) {
		const i = Number.parseInt(_i);
		const targetText = `${synergy.trait} ${synergy.count}/${synergy.threshold}`;

		if (threeContext.synergiesGeometries[i]?.userData.text !== targetText) {
			threeContext.synergiesGeometries[i]?.dispose();
			const geometry = new TextGeometry(targetText, textParams);
			geometry.userData.text = targetText;

			if (threeContext.synergiesGeometries.length <= i) {
				threeContext.synergiesGeometries.push(geometry);
			} else {
				threeContext.synergiesGeometries[i] = geometry;
			}
		}
	}

	if (threeContext.synergiesGeometries.length > display.synergies.length) {
		for (
			let i = display.synergies.length;
			i < threeContext.synergiesGeometries.length;
			i++
		) {
			threeContext.synergiesGeometries[i].dispose();
		}

		threeContext.synergiesGeometries = threeContext.synergiesGeometries.slice(
			0,
			display.synergies.length,
		);
	}
}
