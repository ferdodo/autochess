import type { Hero } from "./hero.js";
import type { FromSchema } from "json-schema-to-ts";
import { heroSchema } from "./hero.js";
import { levelSchema } from "./level.js";
import type { JsonSchemaRecommended } from "json-schema-policies";

export interface Confrontation {
	playerAHeroes: Hero[];
	playerBHeroes: Hero[];
}

export const confrontationSchema = {
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
} as const;

const a: Confrontation = {} as FromSchema<typeof confrontationSchema>;
const b: FromSchema<typeof confrontationSchema> = {} as Confrontation;
const c: JsonSchemaRecommended = confrontationSchema;
