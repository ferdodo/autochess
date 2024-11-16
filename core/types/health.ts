import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";

export type Health = number;

export const healthSchema = {
	type: "number",
	title: "Health",
	description: "Health points of a player.",
	minimum: 0,
	maximum: 9999,
} as const;

const a: Health = {} as FromSchema<typeof healthSchema>;
const b: FromSchema<typeof healthSchema> = {} as Health;
const c: JsonSchemaRecommended = healthSchema;
