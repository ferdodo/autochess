import type { Action } from "./action";
import type { FromSchema } from "json-schema-to-ts";
import { actionSchema } from "./action";
import type { JsonSchemaRecommended } from "json-schema-policies";

export interface Combat {
	actions: Action[];
}

export const combatSchema = {
	type: "object",
	title: "Combat",
	description: "Representation of a combat.",
	required: ["actions"],
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
	},
	additionalProperties: false,
} as const;

const a: Combat = {} as FromSchema<typeof combatSchema>;
const b: FromSchema<typeof combatSchema> = {} as Combat;
const c: JsonSchemaRecommended = combatSchema;
