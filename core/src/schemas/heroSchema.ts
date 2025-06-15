import { createRecommendedSchema } from "json-schema-policies";
import { heroIdSchema } from "./heroIdSchema.js";
import { appellationSchema } from "./appellationSchema.js";
import { gradeSchema } from "./gradeSchema.js";
import { blockSchema } from "blockwise";
import { attributesSchema } from "./attributesSchema.js";

export const heroSchema = createRecommendedSchema({
	type: "object",
	title: "Hero",
	description: "Character in the game.",
	required: ["id", "appellation", "grade", "position", "attributes"],
	properties: {
		id: heroIdSchema,
		appellation: appellationSchema,
		grade: gradeSchema,
		position: blockSchema,
		attributes: attributesSchema,
	},
	additionalProperties: false,
} as const);
