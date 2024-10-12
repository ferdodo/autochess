import type { InitiateGameRequest } from "./initiate-game-request";
import { initiateGameRequestSchema } from "./initiate-game-request";
import { ObserveGameSubscribeSchema } from "./observe-game-subscribe";
import type { ObserveGameSubscribe } from "./observe-game-subscribe";
import { rerollRequestSchema } from "./reroll-request";
import type { RerollRequest } from "./reroll-request";

export interface ClientMessage {
	initiateGameRequest?: InitiateGameRequest;
	observeGameSubscribe?: ObserveGameSubscribe;
	rerollRequest?: RerollRequest;
}

export const clientMessageSchema = {
	type: "object",
	properties: {
		initiateGameRequest: initiateGameRequestSchema,
		observeGameSubscribe: ObserveGameSubscribeSchema,
		rerollRequest: rerollRequestSchema,
	},
	additionalProperties: false,
} as const;
