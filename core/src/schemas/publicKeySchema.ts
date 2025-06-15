import { createRecommendedSchema } from "json-schema-policies";

export const publicKeySchema = createRecommendedSchema({
	title: "Public Key",
	description: "A public key in hexadecimal format.",
	type: "string",
	minLength: 240,
	maxLength: 240,
	pattern: "^[a-fA-F0-9]+$",
} as const);
