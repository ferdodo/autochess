import { Trait } from "core/src/types/Trait";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Font } from "three/examples/jsm/loaders/FontLoader.js";
import fontJson from "three/examples/fonts/helvetiker_bold.typeface.json";

export function createShopProductTraitGeometry(): Record<Trait, TextGeometry> {
	const textParams = {
		font: new Font(fontJson),
		size: 0.01,
		depth: 0.0000001,
	};

	return {
		[Trait.Knight]: new TextGeometry(Trait.Knight, textParams),
		[Trait.Orc]: new TextGeometry(Trait.Orc, textParams),
		[Trait.Cavalry]: new TextGeometry(Trait.Cavalry, textParams),
		[Trait.Ranged]: new TextGeometry(Trait.Ranged, textParams),
		[Trait.Magic]: new TextGeometry(Trait.Magic, textParams),
		[Trait.Beast]: new TextGeometry(Trait.Beast, textParams),
		[Trait.BladeMaster]: new TextGeometry(Trait.BladeMaster, textParams),
		[Trait.Dead]: new TextGeometry(Trait.Dead, textParams),
		[Trait.Light]: new TextGeometry(Trait.Light, textParams),
		[Trait.Dark]: new TextGeometry(Trait.Dark, textParams),
		[Trait.Armored]: new TextGeometry(Trait.Armored, textParams),
	};
}
