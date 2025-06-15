import { createRecommendedSchema } from "json-schema-policies";

export const dateTimeSchema = createRecommendedSchema({
	type: "string",
	title: "Date Time",
	description: "Date and time in ISO 8601 format.",
	format: "date-time",
	pattern:
		"^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(Z|[+-]\\d{2}:\\d{2})$",
	minLength: 20,
	maxLength: 29,
} as const);
