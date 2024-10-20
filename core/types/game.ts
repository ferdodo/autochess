import { publicKeySchema, type PublicKey } from "./public-key";
import type { Hero } from "./hero";
import type { Appellation } from "./appellation";
import type { Playsig } from "./playsig";
import type { Phase } from "./phase";
import type { Level } from "./level";
import { playsigSchema } from "./playsig";
import { nicknameSchema } from "./nickname";

export interface Game {
	playsig: Playsig;
	publicKeys: PublicKey[];
	nicknames: Record<PublicKey, string>;
	playerHeroes: Record<PublicKey, Hero[]>;
	playerBenches: Record<PublicKey, Record<number, Hero>>;
	playerShops: Record<PublicKey, Appellation[]>;
	playerMoney: Record<PublicKey, number>;
	playerLevel: Record<PublicKey, Level>;
	phase: Phase;
}

export const gameSchema = {
	type: "object",
	required: [
		"playsig",
		"publicKeys",
		"nicknames",
		"playerHeroes",
		"playerBenches",
		"playerShops",
		"playerMoney",
		"playerLevel",
		"phase",
	],
	properties: {
		playsig: playsigSchema,
		publicKeys: {
			type: "array",
			items: publicKeySchema,
			minItems: 2,
			maxItems: 8,
		},
		nicknames: {
			type: "object",
			additionalProperties: nicknameSchema,
			minProperties: 2,
			maxProperties: 8,
		},
	},
};
