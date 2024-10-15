import type { PublicKey } from "./public-key";
import { publicKeySchema } from "./public-key";
import type { Signature } from "./signature";
import { signatureSchema } from "./signature";
import type { Timestamp } from "./timestamp";
import { timestampSchema } from "./timestamp";
import { playsigSchema } from "./playsig";
import type { Playsig } from "./playsig";

export interface LevelUpRequest {
	publicKey: PublicKey;
	playsig: Playsig;
	signature: Signature;
	timestamp: Timestamp;
}

export const LevelUpRequestSchema = {
	type: "object",
	required: ["publicKey", "playsig", "signature", "timestamp"],
	properties: {
		publicKey: publicKeySchema,
		playsig: playsigSchema,
		signature: signatureSchema,
		timestamp: timestampSchema,
	},
	additionalProperties: false,
} as const;
