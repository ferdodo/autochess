import type { FromSchema } from "json-schema-to-ts";

export type Nickname = string;

export const nicknameSchema = {
	type: "string",
	minLength: 1,
	maxLength: 20,
	pattern: "^[\\p{L}]+$",
} as const;

const a: Nickname = {} as FromSchema<typeof nicknameSchema>;
const b: FromSchema<typeof nicknameSchema> = {} as Nickname;
