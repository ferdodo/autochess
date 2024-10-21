import type { FromSchema } from "json-schema-to-ts";

export type DateTime = string;

export const dateTimeSchema = {
	type: "string",
	format: "date-time",
} as const;

const a: DateTime = {} as FromSchema<typeof dateTimeSchema>;
const b: FromSchema<typeof dateTimeSchema> = {} as DateTime;
