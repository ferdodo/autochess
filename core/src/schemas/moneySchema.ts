import { createRecommendedSchema } from "json-schema-policies";

export const moneySchema = createRecommendedSchema({
	type: "number",
	title: "Money",
	description: "Amount of money.",
	minimum: 0,
	maximum: 9999,
} as const);
