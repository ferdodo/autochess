import { createRecommendedSchema } from "json-schema-policies";
import { Appellation } from "../types/Appellation.js";

export const appellationSchema = createRecommendedSchema({
	type: "string",
	title: "Appellation",
	description: "Appellation of a character.",
	enum: Object.values(Appellation),
} as const);
