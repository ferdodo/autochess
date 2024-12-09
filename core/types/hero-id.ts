import type { Uid } from "./uid.js";
import { uidSchema } from "./uid.js";
import type { JsonSchemaRecommended } from "json-schema-policies";
import type { FromSchema } from "json-schema-to-ts";

export type HeroId = Uid;
export const heroIdSchema = uidSchema;

const a: HeroId = {} as FromSchema<typeof heroIdSchema>;
const b: FromSchema<typeof heroIdSchema> = {} as HeroId;
const c: JsonSchemaRecommended = heroIdSchema;
