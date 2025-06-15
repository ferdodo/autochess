import { createRecommendedSchema } from "json-schema-policies";
import { moveSchema } from "./moveSchema.js";
import { attackSchema } from "./attackSchema.js";

export const actionSchema = createRecommendedSchema({
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
} as const);
