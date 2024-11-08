import type { FromSchema } from "json-schema-to-ts";
import { pieceSlotSchema } from "./piece-slot";
import { heroIdSchema, type HeroId } from "./hero-id";
import { blockSchema } from "blockwise";
import type { Block } from "blockwise";

export interface Move {
	heroId: HeroId;
	position: Block;
}

export const moveSchema = {
	type: "object",
	required: ["heroId", "position"],
	properties: {
		heroId: heroIdSchema,
		position: blockSchema,
	},
	additionalProperties: false,
} as const;

const a: Move = {} as FromSchema<typeof moveSchema>;
const b: FromSchema<typeof moveSchema> = {} as Move;
