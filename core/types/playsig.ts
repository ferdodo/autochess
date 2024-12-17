import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";
import { uidSchema } from "./uid.js";

export type Playsig = string;

export const playsigSchema = uidSchema;

const a: Playsig = {} as FromSchema<typeof playsigSchema>;
const b: FromSchema<typeof playsigSchema> = {} as Playsig;
const c: JsonSchemaRecommended = playsigSchema;
