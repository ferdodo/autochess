import { createRecommendedSchema } from "json-schema-policies";
import { heroSchema } from "./heroSchema.js";
import { levelSchema } from "./levelSchema.js";

export const confrontationSchema = createRecommendedSchema({
	type: "object",
	title: "Confrontation",
	description:
		"State of combat between two players. " +
		"This data is not stored, but can be computed " +
		"from the list of Actions of a Combat. " +
		"List of actions can be incrementally appened" +
		"to represent the current state of a combat, " +
		"as for representationnal purposes.",
	required: ["playerAHeroes", "playerBHeroes"],
	properties: {
		playerAHeroes: {
			type: "array",
			title: "Player A heroes",
			description: "List of heroes of player A.",
			items: heroSchema,
			maxItems: levelSchema.maximum,
			minItems: 0,
			uniqueItems: true,
		},
		playerBHeroes: {
			type: "array",
			title: "Player B heroes",
			description: "List of heroes of player B.",
			items: heroSchema,
			maxItems: levelSchema.maximum,
			minItems: 0,
			uniqueItems: true,
		},
	},
	additionalProperties: false,
} as const);
