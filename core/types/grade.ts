import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";

export type Grade = number;

export const gradeSchema = {
	type: "integer",
	title: "Grade",
	description: "Level of a hero.",
	minimum: 0,
	maximum: 5,
} as const;

const a: Grade = {} as FromSchema<typeof gradeSchema>;
const b: FromSchema<typeof gradeSchema> = {} as Grade;
const c: JsonSchemaRecommended = gradeSchema;
