export type Timestamp = number;

export const timestampSchema = {
	type: "number",
	minimum: 0,
	maximum: 9999999999999,
} as const;
