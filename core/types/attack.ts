import type { FromSchema } from "json-schema-to-ts";
import type { HeroId } from "./hero-id";
import { heroIdSchema } from "./hero-id";

export interface Attack {
	attacker: HeroId;
	target: HeroId;
}

export const attackSchema = {
	type: "object",
	required: ["attacker", "target"],
	properties: {
		attacker: heroIdSchema,
		target: heroIdSchema,
	},
	additionalProperties: false,
} as const;

const a: Attack = {} as FromSchema<typeof attackSchema>;
const b: FromSchema<typeof attackSchema> = {} as Attack;
