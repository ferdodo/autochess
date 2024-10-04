export type Nickname = string;

export const nicknameSchema = {
	type: "string",
	minLength: 1,
	maxLength: 20,
	pattern: "^[\\p{L}]+$",
} as const;
