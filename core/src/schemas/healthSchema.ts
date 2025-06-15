import { createRecommendedSchema } from "json-schema-policies";

export const healthSchema = createRecommendedSchema({
	type: "number",
	title: "Health",
	description: "Health points of a player.",
	minimum: 0,
	maximum: 9999,
} as const);
