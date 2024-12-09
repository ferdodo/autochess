import type { PublicKey } from "./public-key.js";
import { publicKeySchema } from "./public-key.js";
import type { Signature } from "./signature.js";
import { signatureSchema } from "./signature.js";
import type { DateTime } from "./date-time.js";
import { dateTimeSchema } from "./date-time.js";
import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";
import type { Stamp } from "./stamp.js";
import { stampSchema } from "./stamp.js";
import { playsigSchema } from "./playsig.js";
import type { Playsig } from "./playsig.js";

export interface RerollRequest {
	publicKey: PublicKey;
	playsig: Playsig;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
	stamp: Stamp;
}

export const rerollRequestSchema = {
	type: "object",
	title: "Reroll request",
	description: "Payload to request rerolling the shop.",
	required: [
		"publicKey",
		"playsig",
		"stamp",
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
		stamp: stampSchema,
	},
	additionalProperties: false,
} as const;

const a: RerollRequest = {} as FromSchema<typeof rerollRequestSchema>;
const b: FromSchema<typeof rerollRequestSchema> = {} as RerollRequest;
const c: JsonSchemaRecommended = rerollRequestSchema;
