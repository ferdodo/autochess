import { Appellation } from "../types/appellation";

export function getHeroRank(appellation: Appellation): number {
	const rankByAppellation: Record<Appellation, number> = {
		[Appellation.Soldier]: 1,
		[Appellation.Orc]: 1,
		[Appellation.EliteOrc]: 3,
		[Appellation.Slime]: 2,
		[Appellation.Lancer]: 3,
		[Appellation.Priest]: 1,
		[Appellation.GreatswordSkeleton]: 3,
	};

	return rankByAppellation[appellation];

	//switch (appellation) {
	//case Appellation.Archer:
	//case Appellation.Orc:
	//case Appellation.Soldier:
	//case Appellation.ArmoredAxeman:
	//case Appellation.Skeleton:
	//case Appellation.Werewolf:
	//case Appellation.SkeletonArcher:
	//case Appellation.Priest:
	//case Appellation.ArmoredOrc:
	//case Appellation.ArmoredSkeleton:
	//case Appellation.Knight:
	//case Appellation.KnightTemplar:
	//return 1;
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
	//default:
	//throw new Error("Unknown rank !");
	//}
}
