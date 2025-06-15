import { createRecommendedSchema } from "json-schema-policies";

export const nicknameSchema = createRecommendedSchema({
	type: "string",
	title: "Nickname",
	description: "Nickname of a player.",
	minLength: 1,
	maxLength: 20,
	pattern: "^[\\p{L}0-9-]+$",
} as const);
