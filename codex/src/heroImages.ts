import { Appellation } from "core/src/types/Appellation";
import SoldierIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Soldier/Soldier/Soldier-Idle.png.base64-data-url";
import KnightIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Knight/Knight/Knight-Idle.png.base64-data-url";
import KnightTemplarIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Knight Templar/Knight Templar/Knight Templar-Idle.png.base64-data-url";
import SwordsmanIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Swordsman/Swordsman/Swordsman-Idle.png.base64-data-url";
import ArmoredAxemanIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Armored Axeman/Armored Axeman/Armored Axeman-Idle.png.base64-data-url";
import OrcIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Orc/Orc/Orc-Idle.png.base64-data-url";
import ArmoredOrcIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Armored Orc/Armored Orc/Armored Orc-Idle.png.base64-data-url";
import EliteOrcIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Elite Orc/Elite Orc/Elite Orc-Idle.png.base64-data-url";
import SkeletonIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Skeleton/Skeleton/Skeleton-Idle.png.base64-data-url";
import SlimeIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Slime/Slime/Slime-Idle.png.base64-data-url";
import LancerIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Lancer/Lancer/Lancer-Idle.png.base64-data-url";
import WizardIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Wizard/Wizard/Wizard-Idle.png.base64-data-url";
import PriestIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Priest/Priest/Priest-Idle.png.base64-data-url";
import ArcherIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Archer/Archer/Archer-Idle.png.base64-data-url";
import WerebearIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Werebear/Werebear/Werebear-Idle.png.base64-data-url";
import OrcRiderIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Orc rider/Orc rider/Orc rider-Idle.png.base64-data-url";
import GreatswordSkeletonIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Greatsword Skeleton/Greatsword Skeleton/Greatsword Skeleton-Idle.png.base64-data-url";
import SkeletonArcherIdle from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Skeleton Archer/Skeleton Archer/Skeleton Archer-Idle.png.base64-data-url";

export const heroImages: Record<Appellation, string> = {
	[Appellation.Soldier]: SoldierIdle,
	[Appellation.Knight]: KnightIdle,
	[Appellation.KnightTemplar]: KnightTemplarIdle,
	[Appellation.Swordsman]: SwordsmanIdle,
	[Appellation.ArmoredAxeman]: ArmoredAxemanIdle,
	[Appellation.Orc]: OrcIdle,
	[Appellation.ArmoredOrc]: ArmoredOrcIdle,
	[Appellation.EliteOrc]: EliteOrcIdle,
	[Appellation.Skeleton]: SkeletonIdle,
	[Appellation.Slime]: SlimeIdle,
	[Appellation.Lancer]: LancerIdle,
	[Appellation.Wizard]: WizardIdle,
	[Appellation.Priest]: PriestIdle,
	[Appellation.Archer]: ArcherIdle,
	[Appellation.Werebear]: WerebearIdle,
	[Appellation.OrcRider]: OrcRiderIdle,
	[Appellation.GreatswordSkeleton]: GreatswordSkeletonIdle,
	[Appellation.SkeletonArcher]: SkeletonArcherIdle,
};
