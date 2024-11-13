import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";

export enum Phase {
	Planning = "Planning",
	Combat = "Combat",
}

export const phaseSchema = {
	type: "string",
	enum: Object.values(Phase),
	title: "Phase",
	description: "Current phase for the game.",
} as const;

const a: Phase = {} as FromSchema<typeof phaseSchema>;
const b: FromSchema<typeof phaseSchema> = {} as Phase;
const c: JsonSchemaRecommended = phaseSchema;
