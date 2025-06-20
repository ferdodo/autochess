import { createRecommendedSchema } from "json-schema-policies";
import { playsigSchema } from "./playsigSchema.js";
import { publicKeySchema } from "./publicKeySchema.js";
import { nicknameSchema } from "./nicknameSchema.js";
import { heroSchema } from "./heroSchema.js";
import { levelSchema } from "./levelSchema.js";
import { appellationSchema } from "./appellationSchema.js";
import { moneySchema } from "./moneySchema.js";
import { combatSchema } from "./combatSchema.js";
import { healthSchema } from "./healthSchema.js";
import { dateTimeSchema } from "./dateTimeSchema.js";
import { phaseSchema } from "./phaseSchema.js";

export const gameSchema = createRecommendedSchema({
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
		"playerHealths",
		"playerLostAt",
		"phase",
		"phaseStartAt",
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
			additionalProperties: moneySchema,
		},
		playerLevel: {
			type: "object",
			title: "Player level",
			description: "Level of all players in the game.",
			propertyNames: publicKeySchema,
			additionalProperties: levelSchema,
		},
		combats: {
			type: "array",
			title: "Combats",
			description: "List of combats only during combat phase.",
			items: combatSchema,
			minItems: 0,
			maxItems: 9999,
			uniqueItems: false,
		},
		previousCombats: {
			type: "array",
			title: "Combats",
			description: "List of the previous combats of the last combat phase.",
			items: combatSchema,
			minItems: 0,
			maxItems: 9999,
			uniqueItems: false,
		},
		playerHealths: {
			type: "object",
			title: "Player healths",
			description: "Healths of all players in the game.",
			propertyNames: publicKeySchema,
			additionalProperties: healthSchema,
		},
		playerLostAt: {
			type: "object",
			title: "Player lost at",
			description: "Time when a player lost the game.",
			propertyNames: publicKeySchema,
			additionalProperties: dateTimeSchema,
		},
		phase: phaseSchema,
		phaseStartAt: dateTimeSchema,
	},
	additionalProperties: false,
} as const);
