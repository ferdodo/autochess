import { blockSchema } from "blockwise";
import { createRecommendedSchema } from "json-schema-policies";
import { heroIdSchema } from "./heroIdSchema.js";

export const moveSchema = createRecommendedSchema({
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
} as const);
