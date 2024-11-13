import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";

export type Uid = string;

export const uidSchema = {
	type: "string",
	title: "UID",
	description: "Unique identifier.",
	pattern: "^[a-zA-Z0-9]+$",
	minLength: 11,
	maxLength: 11,
} as const;

const a: Uid = {} as FromSchema<typeof uidSchema>;
const b: FromSchema<typeof uidSchema> = {} as Uid;
const c: JsonSchemaRecommended = uidSchema;
