import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Font } from "three/examples/jsm/loaders/FontLoader.js";
import fontJson from "three/examples/fonts/helvetiker_bold.typeface.json";

export function createLevelUpGeometry(): TextGeometry {
	const font = new Font(fontJson);
	const textParams = { font, size: 0.01, depth: 0.0000001 };
	return new TextGeometry("Level Up", textParams);
}
