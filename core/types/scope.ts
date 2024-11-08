import type { HeroId } from "./hero-id";
import { heroIdSchema } from "./hero-id";
import type { FromSchema } from "json-schema-to-ts";
import { blockSchema } from "blockwise";
import type { Block } from "blockwise";

export interface Scope {
	heroes: HeroId[];
	positions: Block[];
}

export const scopeSchema = {
	type: "object",
	required: ["heroes", "positions"],
	properties: {
		heroes: {
			type: "array",
			items: heroIdSchema,
		},
		positions: {
			type: "array",
			items: blockSchema,
		},
	},
	additionalProperties: false,
} as const;

const a: Scope = {} as FromSchema<typeof scopeSchema>;
const b: FromSchema<typeof scopeSchema> = {} as Scope;
