import type { Move } from "./move";
import type { FromSchema } from "json-schema-to-ts";
import { moveSchema } from "./move";
import type { Attack } from "./attack";
import { attackSchema } from "./attack";
import type { JsonSchemaRecommended } from "json-schema-policies";

export interface Action {
	move?: Move;
	attack?: Attack;
}

export const actionSchema = {
	type: "object",
	title: "Action",
	description:
		"Action of a hero (move, attack, ability...) " +
		"in the context of a confrontation.",
	required: [],
	properties: {
		move: moveSchema,
		attack: attackSchema,
	},
	additionalProperties: false,
	maxProperties: 2,
	minProperties: 2,
} as const;

const a: Action = {} as FromSchema<typeof actionSchema>;
const b: FromSchema<typeof actionSchema> = {} as Action;
const c: JsonSchemaRecommended = actionSchema;
