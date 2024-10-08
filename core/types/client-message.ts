import type { InitiateGameRequest } from "./initiate-game-request";
import { initiateGameRequestSchema } from "./initiate-game-request";
import { ObserveGameSubscribeSchema } from "./observe-game-subscribe";
import type { ObserveGameSubscribe } from "./observe-game-subscribe";

export interface ClientMessage {
	initiateGameRequest?: InitiateGameRequest;
	observeGameSubscribe?: ObserveGameSubscribe;
}

export const clientMessageSchema = {
	type: "object",
	properties: {
		initiateGameRequest: initiateGameRequestSchema,
		observeGameSubscribe: ObserveGameSubscribeSchema,
	},
	additionalProperties: false,
} as const;
