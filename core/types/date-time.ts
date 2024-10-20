export type DateTime = string;

export const dateTimeSchema = {
	type: "string",
	format: "date-time",
} as const;
