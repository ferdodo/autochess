import type { FromSchema } from "json-schema-to-ts";

export type Grade = number;

export const gradeSchema = {
	type: "integer",
	minimum: 0,
	maximum: 5,
} as const;

const a: Grade = {} as FromSchema<typeof gradeSchema>;
const b: FromSchema<typeof gradeSchema> = {} as Grade;
