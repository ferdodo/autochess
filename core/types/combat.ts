import type { Action } from "./action.js";
import type { FromSchema } from "json-schema-to-ts";
import { actionSchema } from "./action.js";
import type { JsonSchemaRecommended } from "json-schema-policies";
import { heroSchema, type Hero } from "./hero.js";
import { publicKeySchema, type PublicKey } from "./public-key.js";

export interface Combat {
	playerAPublicKey: PublicKey;
	playerBPublicKey: PublicKey;
	playerAHeroes: Hero[];
	playerBHeroes: Hero[];
	actions: Action[];
}

export const combatSchema = {
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
} as const;

const a: Combat = {} as FromSchema<typeof combatSchema>;
const b: FromSchema<typeof combatSchema> = {} as Combat;
const c: JsonSchemaRecommended = combatSchema;
