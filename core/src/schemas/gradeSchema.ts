import { createRecommendedSchema } from "json-schema-policies";

export const gradeSchema = createRecommendedSchema({
	type: "integer",
	title: "Grade",
	description: "Level of a hero.",
	minimum: 0,
	maximum: 5,
} as const);
