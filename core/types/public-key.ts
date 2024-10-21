import type { FromSchema } from "json-schema-to-ts";

export type PublicKey = string;

export const publicKeySchema = {
	type: "string",
	minLength: 66,
	maxLength: 66,
	pattern: "^[a-fA-F0-9]+$",
} as const;

const a: PublicKey = {} as FromSchema<typeof publicKeySchema>;
const b: FromSchema<typeof publicKeySchema> = {} as PublicKey;
