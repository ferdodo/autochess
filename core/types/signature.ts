import type { FromSchema } from "json-schema-to-ts";

export type Signature = string;

export const signatureSchema = {
	type: "string",
	minLength: 3,
	maxLength: 300,
	pattern: "^[a-fA-F0-9]+$",
} as const;

const a: Signature = {} as FromSchema<typeof signatureSchema>;
const b: FromSchema<typeof signatureSchema> = {} as Signature;
