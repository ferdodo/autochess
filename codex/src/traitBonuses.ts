import { Trait } from "core/src/types/Trait";
import { getDarkSynergyLifeStealPercentage } from "core/src/utils/getDarkSynergyLifeStealPercentage";
import { getOrcSynergyDamageBonus } from "core/src/utils/getOrcSynergyDamageBonus";

export const traitBonuses: Record<Trait, string> = {
	[Trait.Knight]: "",
	[Trait.Orc]: `+${getOrcSynergyDamageBonus()} damage per attack`,
	[Trait.Cavalry]: "",
	[Trait.Ranged]: "",
	[Trait.Magic]: "",
	[Trait.Beast]: "",
	[Trait.BladeMaster]: "",
	[Trait.Dead]: "",
	[Trait.Light]: "",
	[Trait.Dark]: `Heals for ${getDarkSynergyLifeStealPercentage() * 100}% of the damage it deals`,
	[Trait.Armored]: "",
};
