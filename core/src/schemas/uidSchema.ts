import { createRecommendedSchema } from "json-schema-policies";

export const uidSchema = createRecommendedSchema({
	type: "string",
	title: "UID",
	description: "Unique identifier.",
	pattern: "^[a-zA-Z0-9]+$",
	minLength: 11,
	maxLength: 11,
} as const);
