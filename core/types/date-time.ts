import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";

export type DateTime = string;

export const dateTimeSchema = {
	type: "string",
	title: "Date Time",
	description: "Date and time in ISO 8601 format.",
	format: "date-time",
	pattern:
		"^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(Z|[+-]\\d{2}:\\d{2})$",
	minLength: 20,
	maxLength: 29,
} as const;

const a: DateTime = {} as FromSchema<typeof dateTimeSchema>;
const b: FromSchema<typeof dateTimeSchema> = {} as DateTime;
const c: JsonSchemaRecommended = dateTimeSchema;
