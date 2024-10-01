import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Font } from "three/examples/jsm/loaders/FontLoader.js";
import fontJson from "three/examples/fonts/helvetiker_bold.typeface.json";
import type { ThreeContext } from "../types/three-context";
import type { Display } from "core/types/display";

export function renderPlayerGeometry(
	threeContext: ThreeContext,
	display: Display,
) {
	const textParams = {
		font: new Font(fontJson),
		size: 0.01,
		depth: 0.0000001,
	};

	for (const [_i, { name, health, level }] of Object.entries(display.players)) {
		const i = Number.parseInt(_i);
		const targetText = `${name} / ${health} Hp / Lvl ${level}`;

		if (threeContext.playerGeometries[i]?.userData.text !== targetText) {
			threeContext.playerGeometries[i]?.dispose();
			const geometry = new TextGeometry(targetText, textParams);
			geometry.userData.text = targetText;

			if (threeContext.playerGeometries.length <= i) {
				threeContext.playerGeometries.push(geometry);
			} else {
				threeContext.playerGeometries[i] = geometry;
			}
		}
	}

	if (threeContext.playerGeometries.length > display.players.length) {
		for (
			let i = display.players.length;
			i < threeContext.playerGeometries.length;
			i++
		) {
			threeContext.playerGeometries[i].dispose();
		}

		threeContext.playerGeometries = threeContext.playerGeometries.slice(
			0,
			display.players.length,
		);
	}
}
