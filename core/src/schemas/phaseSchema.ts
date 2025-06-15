import { createRecommendedSchema } from "json-schema-policies";
import { Phase } from "../types/Phase.js";

export const phaseSchema = createRecommendedSchema({
	type: "string",
	enum: Object.values(Phase),
	title: "Phase",
	description: "Current phase for the game.",
} as const);
