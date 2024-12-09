import type { InitiateGameRequest } from "./initiate-game-request.js";
import { initiateGameRequestSchema } from "./initiate-game-request.js";
import {
	LevelUpRequestSchema,
	type LevelUpRequest,
} from "./level-up-request.js";
import { ObserveGameSubscribeSchema } from "./observe-game-subscribe.js";
import type { ObserveGameSubscribe } from "./observe-game-subscribe.js";
import { rerollRequestSchema } from "./reroll-request.js";
import type { RerollRequest } from "./reroll-request.js";
import {
	shopBuyRequestSchema,
	type ShopBuyRequest,
} from "./shop-buy-request.js";
import { transposeRequestSchema } from "./transpose-request.js";
import type { TransposeRequest } from "./transpose-request.js";
import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";

export interface ClientMessage {
	initiateGameRequest?: InitiateGameRequest;
	observeGameSubscribe?: ObserveGameSubscribe;
	rerollRequest?: RerollRequest;
	levelUpRequest?: LevelUpRequest;
	transposeRequest?: TransposeRequest;
	shopBuyRequest?: ShopBuyRequest;
}

export const clientMessageSchema = {
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
} as const;

const a: ClientMessage = {} as FromSchema<typeof clientMessageSchema>;
const b: FromSchema<typeof clientMessageSchema> = {} as ClientMessage;
const c: JsonSchemaRecommended = clientMessageSchema;
