import type { InitiateGameRequest } from "./initiate-game-request";
import { initiateGameRequestSchema } from "./initiate-game-request";

export interface ClientMessage {
	initiateGameRequest?: InitiateGameRequest;
}

export const clientMessageSchema = {
	type: "object",
	properties: {
		initiateGameRequest: initiateGameRequestSchema,
	},
	additionalProperties: false,
} as const;
