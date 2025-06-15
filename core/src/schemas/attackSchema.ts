import type { JsonSchemaRecommended } from "json-schema-policies";
import { heroIdSchema } from "./heroIdSchema.js";

export const attackSchema = {
	type: "object",
	title: "Attack",
	description: "Action of a hero attacking.",
	required: ["attacker", "target"],
	properties: {
		attacker: heroIdSchema,
		target: heroIdSchema,
	},
	additionalProperties: false,
} as const;

const c: JsonSchemaRecommended = attackSchema;
