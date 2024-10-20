import type { PublicKey } from "./public-key";
import { publicKeySchema } from "./public-key";
import type { Signature } from "./signature";
import { signatureSchema } from "./signature";
import { playsigSchema } from "./playsig";
import type { Playsig } from "./playsig";
import type { DateTime } from "./date-time";
import { dateTimeSchema } from "./date-time";

export interface RerollRequest {
	publicKey: PublicKey;
	playsig: Playsig;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
}

export const rerollRequestSchema = {
	type: "object",
	required: ["publicKey", "playsig", "signature", "issuedAt", "expiresAt"],
	properties: {
		publicKey: publicKeySchema,
		playsig: playsigSchema,
		signature: signatureSchema,
		issuedAt: dateTimeSchema,
		expiresAt: dateTimeSchema,
	},
	additionalProperties: false,
} as const;
