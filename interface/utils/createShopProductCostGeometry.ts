import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Font } from "three/examples/jsm/loaders/FontLoader.js";
import fontJson from "three/examples/fonts/helvetiker_bold.typeface.json";

export function createShopProductCostGeometry(): Record<number, TextGeometry> {
	const textParams = {
		font: new Font(fontJson),
		size: 0.008,
		depth: 0.0000001,
	};

	return {
		1: new TextGeometry("1", textParams),
		2: new TextGeometry("2", textParams),
		3: new TextGeometry("3", textParams),
	};
}
