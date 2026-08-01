import { Trait } from "../types/Trait.js";

export function getSynergiesThresholds(): Record<Trait, number> {
	return {
		[Trait.Knight]: 3,
		[Trait.Orc]: 4,
		[Trait.Cavalry]: 2,
		[Trait.Ranged]: 3,
		[Trait.Magic]: 3,
		[Trait.Beast]: 2,
		[Trait.BladeMaster]: 2,
		[Trait.Dead]: 3,
		[Trait.Light]: 2,
		[Trait.Dark]: 3,
		[Trait.Armored]: 3,
	};
}
