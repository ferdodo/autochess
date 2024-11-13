import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";

export type Level = number;

export const levelSchema = {
	title: "Level",
	description: "Level for a player.",
	type: "integer",
	minimum: 1,
	maximum: 10,
} as const;

const a: FromSchema<typeof levelSchema> = {} as Level;
const b: Level = {} as FromSchema<typeof levelSchema>;
const c: JsonSchemaRecommended = levelSchema;
