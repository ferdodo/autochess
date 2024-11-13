import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";

export type Signature = string;

export const signatureSchema = {
	type: "string",
	title: "Signature",
	description: "Cryptographic signature of a message.",
	minLength: 3,
	maxLength: 300,
	pattern: "^[a-fA-F0-9]+$",
} as const;

const a: Signature = {} as FromSchema<typeof signatureSchema>;
const b: FromSchema<typeof signatureSchema> = {} as Signature;
const c: JsonSchemaRecommended = signatureSchema;
