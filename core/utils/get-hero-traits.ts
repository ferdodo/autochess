import { Appellation } from "../types/appellation";
import { Trait } from "../types/trait";

export function getHeroTraits(appellation: Appellation): Trait[] {
	switch (appellation) {
		case Appellation.Soldier:
			return [Trait.Knight, Trait.Ranged];
		//case Appellation.Knight:
		//	return [Trait.Knight, Trait.Cavalry];
		// case Appellation.KnightTemplar:
		//return [Trait.Knight, Trait.Light];
		// case Appellation.Swordsman:
		//return [Trait.BladeMaster];
		// case Appellation.ArmoredAxeman:
		//return [Trait.Armored];
		case Appellation.Orc:
			return [Trait.Orc];
		// case Appellation.ArmoredOrc:
		//return [Trait.Orc, Trait.Armored];
		// case Appellation.EliteOrc:
		//return [Trait.Orc, Trait.Dark];
		// case Appellation.Skeleton:
		//return [Trait.Dead];
		// case Appellation.ArmoredSkeleton:
		//return [Trait.Dead, Trait.Armored];
		// case Appellation.Slime:
		//return [Trait.Beast, Trait.Magic];
		// case Appellation.Lancer:
		//return [Trait.Cavalry];
		// case Appellation.Wizard:
		//return [Trait.Magic, Trait.Dark];
		// case Appellation.Priest:
		//return [Trait.Magic, Trait.Light];
		// case Appellation.Archer:
		//return [Trait.Ranged];
		// case Appellation.Werewolf:
		//return [Trait.Beast, Trait.BladeMaster];
		// case Appellation.Werebear:
		//return [Trait.Beast, Trait.Dark];
		// case Appellation.OrcRider:
		//return [Trait.Orc, Trait.Cavalry];
		// case Appellation.GreatswordSkeleton:
		//return [Trait.Dead, Trait.BladeMaster];
		// case Appellation.SkeletonArcher:
		//return [Trait.Dead, Trait.Ranged];
		default:
			throw new Error(`Unknown appellation: ${appellation} !`);
	}
}
