import { createRecommendedSchema } from "json-schema-policies";

export const levelSchema = createRecommendedSchema({
	title: "Level",
	description: "Level for a player.",
	type: "integer",
	minimum: 1,
	maximum: 6,
} as const);
