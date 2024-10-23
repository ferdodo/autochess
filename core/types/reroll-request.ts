import type { PublicKey } from "./public-key";
import { publicKeySchema } from "./public-key";
import type { Signature } from "./signature";
import { signatureSchema } from "./signature";
import { playsigSchema } from "./playsig";
import type { Playsig } from "./playsig";
import type { DateTime } from "./date-time";
import { dateTimeSchema } from "./date-time";
import type { FromSchema } from "json-schema-to-ts";
import { cachedGameSchema } from "./cached-game";
import type { CachedGame } from "./cached-game";

export interface RerollRequest {
	publicKey: PublicKey;
	playsig: Playsig;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
	cachedGame: CachedGame;
}

export const rerollRequestSchema = {
	type: "object",
	required: [
		"publicKey",
		"cachedGame",
		"playsig",
		"signature",
		"issuedAt",
		"expiresAt",
	],
	properties: {
		publicKey: publicKeySchema,
		playsig: playsigSchema,
		signature: signatureSchema,
		issuedAt: dateTimeSchema,
		expiresAt: dateTimeSchema,
		cachedGame: cachedGameSchema,
	},
	additionalProperties: false,
} as const;

const a: RerollRequest = {} as FromSchema<typeof rerollRequestSchema>;
const b: FromSchema<typeof rerollRequestSchema> = {} as RerollRequest;
