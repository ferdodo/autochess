import type { FromSchema } from "json-schema-to-ts";

export type Uid = string;

export const uidSchema = {
	type: "string",
	format: "uuid",
} as const;

const a: Uid = {} as FromSchema<typeof uidSchema>;
const b: FromSchema<typeof uidSchema> = {} as Uid;
