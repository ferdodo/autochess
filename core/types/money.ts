import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";

export type Money = number;

export const moneySchema = {
	type: "number",
	title: "Money",
	description: "Amount of money.",
	minimum: 0,
	maximum: 9999,
} as const;

const a: Money = {} as FromSchema<typeof moneySchema>;
const b: FromSchema<typeof moneySchema> = {} as Money;
const c: JsonSchemaRecommended = moneySchema;
