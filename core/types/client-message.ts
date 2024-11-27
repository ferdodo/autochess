import type { InitiateGameRequest } from "./initiate-game-request";
import { initiateGameRequestSchema } from "./initiate-game-request";
import { LevelUpRequestSchema, type LevelUpRequest } from "./level-up-request";
import { ObserveGameSubscribeSchema } from "./observe-game-subscribe";
import type { ObserveGameSubscribe } from "./observe-game-subscribe";
import { rerollRequestSchema } from "./reroll-request";
import type { RerollRequest } from "./reroll-request";
import { shopBuyRequestSchema, type ShopBuyRequest } from "./shop-buy-request";
import { transposeRequestSchema } from "./transpose-request";
import type { TransposeRequest } from "./transpose-request";
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
