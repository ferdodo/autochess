import type { PublicKey } from "./public-key";
import { publicKeySchema } from "./public-key";
import type { Signature } from "./signature";
import { signatureSchema } from "./signature";
import { playsigSchema } from "./playsig";
import type { Playsig } from "./playsig";
import { dateTimeSchema } from "./date-time";
import type { DateTime } from "./date-time";
import type { FromSchema } from "json-schema-to-ts";

export interface LevelUpRequest {
	publicKey: PublicKey;
	playsig: Playsig;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
}

export const LevelUpRequestSchema = {
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

const a: LevelUpRequest = {} as FromSchema<typeof LevelUpRequestSchema>;
const b: FromSchema<typeof LevelUpRequestSchema> = {} as LevelUpRequest;