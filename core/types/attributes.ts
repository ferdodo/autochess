import type { FromSchema } from "json-schema-to-ts";

export interface Attributes {
	mana: number;
	maxMana: number;
	health: number;
	maxHealth: number;
}

export const attributesSchema = {
	type: "object",
	properties: {
		mana: { type: "number" },
		maxMana: { type: "number" },
		health: { type: "number" },
		maxHealth: { type: "number" },
	},
	required: ["mana", "maxMana", "health", "maxHealth"],
	additionalProperties: false,
} as const;

const a: Attributes = {} as FromSchema<typeof attributesSchema>;
const b: FromSchema<typeof attributesSchema> = {} as Attributes;
