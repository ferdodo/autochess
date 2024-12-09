import type { FromSchema } from "json-schema-to-ts";
import { heroIdSchema, type HeroId } from "./hero-id.js";
import { blockSchema } from "blockwise";
import type { Block } from "blockwise";
import type { JsonSchemaRecommended } from "json-schema-policies";

export interface Move {
	heroId: HeroId;
	position: Block;
}

export const moveSchema = {
	type: "object",
	title: "Move",
	description:
		"Action of a hero moving to another " +
		"position in the context of a confrontation.",
	required: ["heroId", "position"],
	properties: {
		heroId: heroIdSchema,
		position: blockSchema,
	},
	additionalProperties: false,
} as const;

const a: Move = {} as FromSchema<typeof moveSchema>;
const b: FromSchema<typeof moveSchema> = {} as Move;
const c: JsonSchemaRecommended = moveSchema;
