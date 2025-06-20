import { Appellation } from "../types/Appellation.js";

export function getHeroCost(appellation: Appellation): number {
	const rankByAppellation: Record<Appellation, number> = {
		[Appellation.Soldier]: 1,
		[Appellation.Orc]: 1,
		[Appellation.EliteOrc]: 3,
		[Appellation.Slime]: 2,
		[Appellation.Lancer]: 3,
		[Appellation.Priest]: 1,
		[Appellation.GreatswordSkeleton]: 3,
		[Appellation.Wizard]: 2,
		[Appellation.Werebear]: 3,
		[Appellation.OrcRider]: 2,
		[Appellation.KnightTemplar]: 1,
		[Appellation.Knight]: 1,
		[Appellation.Swordsman]: 2,
		[Appellation.ArmoredAxeman]: 1,
		[Appellation.Skeleton]: 1,
		[Appellation.ArmoredOrc]: 1,
		[Appellation.SkeletonArcher]: 1,
		[Appellation.Archer]: 1,
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
