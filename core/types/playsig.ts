export type Playsig = string;

export const playsigSchema = {
	type: "string",
	minLength: 132,
	maxLength: 132,
	pattern: "^[0-9a-fA-F]+$",
} as const;
