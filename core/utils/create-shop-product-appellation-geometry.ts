import { Appellation } from "../types/appellation";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Font } from "three/examples/jsm/loaders/FontLoader.js";
import fontJson from "three/examples/fonts/helvetiker_bold.typeface.json";

export function createShopProductAppellationGeometry(): Record<
	Appellation,
	TextGeometry
> {
	const textParams = {
		font: new Font(fontJson),
		size: 0.01,
		depth: 0.0000001,
	};

	return {
		[Appellation.Soldier]: new TextGeometry(Appellation.Soldier, textParams),
	};
}