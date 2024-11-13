import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";

export type PublicKey = string;

export const publicKeySchema = {
	title: "Public Key",
	description: "A public key in hexadecimal format.",
	type: "string",
	minLength: 66,
	maxLength: 66,
	pattern: "^[a-fA-F0-9]+$",
} as const;

const a: PublicKey = {} as FromSchema<typeof publicKeySchema>;
const b: FromSchema<typeof publicKeySchema> = {} as PublicKey;
const c: JsonSchemaRecommended = publicKeySchema;
