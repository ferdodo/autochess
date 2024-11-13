import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";

export type Nickname = string;

export const nicknameSchema = {
	type: "string",
	title: "Nickname",
	description: "Nickname of a player.",
	minLength: 1,
	maxLength: 20,
	pattern: "^[\\p{L}]+$",
} as const;

const a: Nickname = {} as FromSchema<typeof nicknameSchema>;
const b: FromSchema<typeof nicknameSchema> = {} as Nickname;
const c: JsonSchemaRecommended = nicknameSchema;
