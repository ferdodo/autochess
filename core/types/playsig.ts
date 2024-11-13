import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";

export type Playsig = string;

export const playsigSchema = {
	type: "string",
	title: "Playsig",
	description:
		"Unique identifier for a game. Also a digest that " +
		"can be computed from from it's public keys.",
	minLength: 132,
	maxLength: 132,
	pattern: "^[0-9a-fA-F]+$",
} as const;

const a: Playsig = {} as FromSchema<typeof playsigSchema>;
const b: FromSchema<typeof playsigSchema> = {} as Playsig;
const c: JsonSchemaRecommended = playsigSchema;
