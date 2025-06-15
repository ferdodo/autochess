import { actionSchema } from "./actionSchema.js";
import { createRecommendedSchema } from "json-schema-policies";
import { publicKeySchema } from "./publicKeySchema.js";
import { heroSchema } from "./heroSchema.js";

export const combatSchema = createRecommendedSchema({
	type: "object",
	title: "Combat",
	description: "Representation of a combat.",
	required: [
		"actions",
		"playerAHeroes",
		"playerBHeroes",
		"playerAPublicKey",
		"playerBPublicKey",
	],
	properties: {
		playerAPublicKey: publicKeySchema,
		playerBPublicKey: publicKeySchema,
		actions: {
			type: "array",
			title: "Actions",
			description: "Series of events (actions) happening in a combat.",
			items: actionSchema,
			minItems: 1,
			maxItems: 99999,
			uniqueItems: false,
		},
		playerAHeroes: {
			type: "array",
			title: "Player A heroes",
			description: "Initial list of heroes of player A.",
			items: heroSchema,
			minItems: 0,
			maxItems: 9999,
			uniqueItems: true,
		},
		playerBHeroes: {
			type: "array",
			title: "Player B heroes",
			description: "Initial list of heroes of player B.",
			items: heroSchema,
			minItems: 0,
			maxItems: 9999,
			uniqueItems: true,
		},
	},
	additionalProperties: false,
} as const);
