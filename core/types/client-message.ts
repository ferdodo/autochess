import type { InitiateGameRequest } from "./initiate-game-request";
import type { Signature } from "./signature";
import { signatureSchema } from "./signature";
import type { Timestamp } from "./timestamp";
import { timestampSchema } from "./timestamp";
import { initiateGameRequestSchema } from "./initiate-game-request";

export interface ClientMessage {
	initiateGameRequest?: InitiateGameRequest;
	signature: Signature;
	timestamp: Timestamp;
}

export const clientMessageSchema = {
	type: "object",
	required: ["signature", "timestamp"],
	properties: {
		initiateGameRequest: initiateGameRequestSchema,
		signature: signatureSchema,
		timestamp: timestampSchema,
	},
	additionalProperties: false,
} as const;
