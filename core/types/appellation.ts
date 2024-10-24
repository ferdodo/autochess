import type { FromSchema } from "json-schema-to-ts";

export enum Appellation {
	Soldier = "Soldier",
	Knight = "Knight",
	KnightTemplar = "Knight Templar",
	Swordsman = "Swordsman",
	ArmoredAxeman = "Armored Axeman",
	Orc = "Orc",
	ArmoredOrc = "Armored Orc",
	EliteOrc = "Elite Orc",
	Skeleton = "Skeleton",
	//ArmoredSkeleton = "Armored Skeleton",
	Slime = "Slime",
	Lancer = "Lancer",
	Wizard = "Wizard",
	Priest = "Priest",
	Archer = "Archer",
	//Werewolf = "Werewolf",
	Werebear = "Werebear",
	OrcRider = "Orc Rider",
	GreatswordSkeleton = "Greatsword Skeleton",
	SkeletonArcher = "Skeleton Archer",
}

export const appellationSchema = {
	type: "string",
	enum: Object.values(Appellation),
} as const;

const a: Appellation = {} as FromSchema<typeof appellationSchema>;
const b: FromSchema<typeof appellationSchema> = {} as Appellation;
