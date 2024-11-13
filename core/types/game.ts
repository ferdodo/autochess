import { publicKeySchema, type PublicKey } from "./public-key";
import { heroSchema, type Hero } from "./hero";
import { appellationSchema, type Appellation } from "./appellation";
import type { Playsig } from "./playsig";
import { phaseSchema } from "./phase";
import type { Phase } from "./phase";
import { levelSchema, type Level } from "./level";
import { playsigSchema } from "./playsig";
import { nicknameSchema } from "./nickname";
import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";

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
	title: "Game",
	description:
		"Game state, representing all boards, benches, " +
		"and shops, etc... of all players. This data is " +
		"public for all players.",
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
			title: "Game public keys",
			description: "Public keys of all players in the game.",
			items: publicKeySchema,
			minItems: 2,
			maxItems: 8,
			uniqueItems: true,
		},
		nicknames: {
			type: "object",
			title: "Nicknames",
			description: "Nicknames of all players in the game.",
			propertyNames: publicKeySchema,
			additionalProperties: nicknameSchema,
			minProperties: 2,
			maxProperties: 8,
		},
		playerHeroes: {
			type: "object",
			title: "Player heroes",
			description: "List of heroes of every players in the game.",
			propertyNames: publicKeySchema,
			additionalProperties: {
				type: "array",
				title: "Player heroes",
				description: "Heroes of a player.",
				items: heroSchema,
				minItems: 0,
				maxItems: levelSchema.maximum,
				uniqueItems: true,
			},
		},
		playerBenches: {
			type: "object",
			title: "Player benches",
			description: "Benches of all players in the game.",
			propertyNames: publicKeySchema,
			additionalProperties: {
				type: "object",
				title: "Player bench",
				description: "Bench of a player.",
				propertyNames: {
					type: "integer",
					title: "Bench slot",
					description: "Slot number of a bench.",
					minimum: 0,
					maximum: 5,
				},
				additionalProperties: heroSchema,
			},
		},
		playerShops: {
			type: "object",
			title: "Player shops",
			description: "Shops of all players in the game.",
			propertyNames: publicKeySchema,
			additionalProperties: {
				type: "array",
				title: "Player shop",
				description: "Shop of a player.",
				items: appellationSchema,
				minItems: 0,
				maxItems: 3,
				uniqueItems: false,
			},
		},
		playerMoney: {
			type: "object",
			title: "Players money",
			description: "Money of all players in the game.",
			propertyNames: publicKeySchema,
			additionalProperties: {
				title: "Money",
				description: "Money of a player.",
				type: "integer",
				minimum: 0,
				maximum: Number.MAX_VALUE,
			},
		},
		playerLevel: {
			type: "object",
			title: "Player level",
			description: "Level of all players in the game.",
			propertyNames: publicKeySchema,
			additionalProperties: levelSchema,
		},
		phase: phaseSchema,
	},
	additionalProperties: false,
} as const;

const a: Game = {} as FromSchema<typeof gameSchema>;
const b: FromSchema<typeof gameSchema> = {} as Game;
const c: JsonSchemaRecommended = gameSchema;
