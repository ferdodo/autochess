export type Playsig = string;

export const playsigSchema = {
	type: "string",
	minLength: 64,
	maxLength: 64,
	pattern: "^[0-9a-fA-F]+$",
} as const;
