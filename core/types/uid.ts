import type { FromSchema } from "json-schema-to-ts";

export type Uid = string;

export const uidSchema = {
	type: "string",
	pattern: "^[a-zA-Z0-9]{11}$",
} as const;

const a: Uid = {} as FromSchema<typeof uidSchema>;
const b: FromSchema<typeof uidSchema> = {} as Uid;
