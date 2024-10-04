export type PublicKey = string;

export const publicKeySchema = {
	type: "string",
	minLength: 66,
	maxLength: 66,
	pattern: "^[a-fA-F0-9]+$",
} as const;
