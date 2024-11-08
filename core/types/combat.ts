import type { Action } from "./action";
import type { FromSchema } from "json-schema-to-ts";
import { actionSchema } from "./action";

export interface Combat {
	actions: Action[];
}

export const combatSchema = {
	type: "object",
	required: ["actions"],
	properties: {
		actions: {
			type: "array",
			items: actionSchema,
		},
	},
	additionalProperties: false,
} as const;

const a: Combat = {} as FromSchema<typeof combatSchema>;
const b: FromSchema<typeof combatSchema> = {} as Combat;
