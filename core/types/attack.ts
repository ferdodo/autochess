import type { FromSchema } from "json-schema-to-ts";
import type { HeroId } from "./hero-id.js";
import { heroIdSchema } from "./hero-id.js";
import type { JsonSchemaRecommended } from "json-schema-policies";

export interface Attack {
	attacker: HeroId;
	target: HeroId;
}

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

const a: Attack = {} as FromSchema<typeof attackSchema>;
const b: FromSchema<typeof attackSchema> = {} as Attack;
const c: JsonSchemaRecommended = attackSchema;
