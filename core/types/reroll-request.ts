import type { PublicKey } from "./public-key";
import { publicKeySchema } from "./public-key";
import type { Signature } from "./signature";
import { signatureSchema } from "./signature";
import type { DateTime } from "./date-time";
import { dateTimeSchema } from "./date-time";
import type { FromSchema } from "json-schema-to-ts";
import { cachedGameSchema } from "./cached-game";
import type { CachedGame } from "./cached-game";
import type { JsonSchemaRecommended } from "json-schema-policies";

export interface RerollRequest {
	publicKey: PublicKey;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
	cachedGame: CachedGame;
}

export const rerollRequestSchema = {
	type: "object",
	title: "Reroll request",
	description: "Payload to request rerolling the shop.",
	required: ["publicKey", "cachedGame", "signature", "issuedAt", "expiresAt"],
	properties: {
		publicKey: publicKeySchema,
		signature: signatureSchema,
		issuedAt: dateTimeSchema,
		expiresAt: dateTimeSchema,
		cachedGame: cachedGameSchema,
	},
	additionalProperties: false,
} as const;

const a: RerollRequest = {} as FromSchema<typeof rerollRequestSchema>;
const b: FromSchema<typeof rerollRequestSchema> = {} as RerollRequest;
const c: JsonSchemaRecommended = rerollRequestSchema;
