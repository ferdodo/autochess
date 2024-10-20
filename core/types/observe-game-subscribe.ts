import { dateTimeSchema } from "./date-time";
import { playsigSchema } from "./playsig";
import { publicKeySchema } from "./public-key";
import { signatureSchema } from "./signature";
import type { DateTime } from "./date-time";
import type { Playsig } from "./playsig";
import type { PublicKey } from "./public-key";
import type { Signature } from "./signature";

export interface ObserveGameSubscribe {
	playsig: Playsig;
	publicKey: PublicKey;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
}

export const ObserveGameSubscribeSchema = {
	type: "object",
	required: ["playsig", "issuedAt", "expiresAt", "publicKey", "signature"],
	properties: {
		playsig: playsigSchema,
		publicKey: publicKeySchema,
		signature: signatureSchema,
		issuedAt: dateTimeSchema,
		expiresAt: dateTimeSchema,
	},
	additionalProperties: false,
} as const;
