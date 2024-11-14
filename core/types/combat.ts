import type { Action } from "./action";
import type { FromSchema } from "json-schema-to-ts";
import { actionSchema } from "./action";
import type { JsonSchemaRecommended } from "json-schema-policies";
import { heroSchema, type Hero } from "./hero";

export interface Combat {
	playerAHeroes: Hero[];
	playerBHeroes: Hero[];
	actions: Action[];
}

export const combatSchema = {
	type: "object",
	title: "Combat",
	description: "Representation of a combat.",
	required: ["actions", "playerAHeroes", "playerBHeroes"],
	properties: {
		actions: {
			type: "array",
			title: "Actions",
			description: "Series of events (actions) happening in a combat.",
			items: actionSchema,
			minItems: 1,
			maxItems: 9999,
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
} as const;

const a: Combat = {} as FromSchema<typeof combatSchema>;
const b: FromSchema<typeof combatSchema> = {} as Combat;
const c: JsonSchemaRecommended = combatSchema;
