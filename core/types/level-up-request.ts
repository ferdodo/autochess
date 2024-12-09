import type { PublicKey } from "./public-key.js";
import { publicKeySchema } from "./public-key.js";
import type { Signature } from "./signature.js";
import { signatureSchema } from "./signature.js";
import { dateTimeSchema } from "./date-time.js";
import type { DateTime } from "./date-time.js";
import type { FromSchema } from "json-schema-to-ts";
import type { Stamp } from "./stamp.js";
import type { JsonSchemaRecommended } from "json-schema-policies";
import { stampSchema } from "./stamp.js";
import { playsigSchema } from "./playsig.js";
import type { Playsig } from "./playsig.js";

export interface LevelUpRequest {
	publicKey: PublicKey;
	playsig: Playsig;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
	stamp: Stamp;
}

export const LevelUpRequestSchema = {
	type: "object",
	title: "Level up request",
	description: "Payload to level up.",
	required: [
		"publicKey",
		"playsig",
		"signature",
		"issuedAt",
		"expiresAt",
		"stamp",
	],
	properties: {
		publicKey: publicKeySchema,
		playsig: playsigSchema,
		signature: signatureSchema,
		issuedAt: dateTimeSchema,
		expiresAt: dateTimeSchema,
		stamp: stampSchema,
	},
	additionalProperties: false,
} as const;

const a: LevelUpRequest = {} as FromSchema<typeof LevelUpRequestSchema>;
const b: FromSchema<typeof LevelUpRequestSchema> = {} as LevelUpRequest;
const c: JsonSchemaRecommended = LevelUpRequestSchema;
