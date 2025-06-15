import { createRecommendedSchema } from "json-schema-policies";

export const attributesSchema = createRecommendedSchema({
	type: "object",
	title: "Attributes",
	description: "Caracteristics of a hero.",
	properties: {
		mana: {
			title: "Mana",
			description: "Resource used to cast abilities.",
			type: "number",
			minimum: 0,
			maximum: 99999,
		},
		maxMana: {
			title: "Max Mana",
			description: "Maximum amount of mana.",
			type: "number",
			minimum: 0,
			maximum: 99999,
		},
		health: {
			title: "Health",
			description: "Amount of health.",
			type: "number",
			minimum: 0,
			maximum: 99999,
		},
		maxHealth: {
			title: "Max Health",
			description: "Maximum amount of health.",
			type: "number",
			minimum: 0,
			maximum: 99999,
		},
	},
	required: ["mana", "maxMana", "health", "maxHealth"],
	additionalProperties: false,
} as const);
