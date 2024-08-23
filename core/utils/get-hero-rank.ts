import { Appellation } from "../types/appellation";
import { Rank } from "../types/rank";

export function getHeroRank(appellation: Appellation) {
	switch (appellation) {
		//case Appellation.Archer:
		//case Appellation.Orc:
		case Appellation.Soldier:
			//case Appellation.ArmoredAxeman:
			//case Appellation.Skeleton:
			//case Appellation.Werewolf:
			//case Appellation.SkeletonArcher:
			//case Appellation.Priest:
			//case Appellation.ArmoredOrc:
			//case Appellation.ArmoredSkeleton:
			//case Appellation.Knight:
			//case Appellation.KnightTemplar:
			return Rank.One;
		//case Appellation.Swordsman:
		//case Appellation.Wizard:
		//case Appellation.OrcRider:
		//case Appellation.Slime:
		//	return Rank.Two;
		//case Appellation.EliteOrc:
		//case Appellation.Werebear:
		//case Appellation.GreatswordSkeleton:
		//case Appellation.Lancer:
		//	return Rank.Three;
		default:
			throw new Error("Unknown rank !");
	}
}
