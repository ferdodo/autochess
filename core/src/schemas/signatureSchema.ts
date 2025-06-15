import { createRecommendedSchema } from "json-schema-policies";

export const signatureSchema = createRecommendedSchema({
	type: "string",
	title: "Signature",
	description: "Cryptographic signature of a message.",
	minLength: 3,
	maxLength: 300,
	pattern: "^[a-fA-F0-9]+$",
} as const);
