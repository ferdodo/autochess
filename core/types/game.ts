import { publicKeySchema, type PublicKey } from "./public-key";
import { heroSchema, type Hero } from "./hero";
import { appellationSchema, type Appellation } from "./appellation";
import type { Playsig } from "./playsig";
import { Phase } from "./phase";
import { levelSchema, type Level } from "./level";
import { playsigSchema } from "./playsig";
import { nicknameSchema } from "./nickname";
import type { FromSchema } from "json-schema-to-ts";

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
		playerHeroes: {
			type: "object",
			propertyNames: publicKeySchema,
			additionalProperties: {
				type: "array",
				items: heroSchema,
				minItems: 0,
				maxItems: 10,
			},
		},
		playerBenches: {
			type: "object",
			propertyNames: publicKeySchema,
			additionalProperties: {
				type: "object",
				propertyNames: {
					type: "integer",
					minimum: 0,
					maximum: 5,
				},
				additionalProperties: heroSchema,
			},
		},
		playerShops: {
			type: "object",
			propertyNames: publicKeySchema,
			additionalProperties: {
				type: "array",
				items: appellationSchema,
				minItems: 0,
				maxItems: 3,
			},
		},
		playerMoney: {
			type: "object",
			propertyNames: publicKeySchema,
			additionalProperties: {
				type: "integer",
				minimum: 0,
			},
		},
		playerLevel: {
			type: "object",
			propertyNames: publicKeySchema,
			additionalProperties: levelSchema,
		},
		phase: {
			type: "string",
			enum: Object.values(Phase),
		},
	},
	additionalProperties: false,
} as const;

const a: Game = {} as FromSchema<typeof gameSchema>;
const b: FromSchema<typeof gameSchema> = {} as Game;
