import { initiateGameRequestSchema } from "./initiateGameRequestSchema.js";
import { LevelUpRequestSchema } from "./LevelUpRequestSchema.js";
import { createRecommendedSchema } from "json-schema-policies";
import { ObserveGameSubscribeSchema } from "./ObserveGameSubscribeSchema.js";
import { rerollRequestSchema } from "./rerollRequestSchema.js";
import { transposeRequestSchema } from "./transposeRequestSchema.js";
import { shopBuyRequestSchema } from "./shopBuyRequestSchema.js";

export const clientMessageSchema = createRecommendedSchema({
	type: "object",
	title: "Client message",
	description: "Message sent by the client.",
	required: [],
	properties: {
		initiateGameRequest: initiateGameRequestSchema,
		observeGameSubscribe: ObserveGameSubscribeSchema,
		rerollRequest: rerollRequestSchema,
		levelUpRequest: LevelUpRequestSchema,
		transposeRequest: transposeRequestSchema,
		shopBuyRequest: shopBuyRequestSchema,
	},
	additionalProperties: false,
	maxProperties: 1,
	minProperties: 1,
} as const);
