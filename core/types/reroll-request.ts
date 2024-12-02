import type { PublicKey } from "./public-key";
import { publicKeySchema } from "./public-key";
import type { Signature } from "./signature";
import { signatureSchema } from "./signature";
import type { DateTime } from "./date-time";
import { dateTimeSchema } from "./date-time";
import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";
import type { Stamp } from "./stamp";
import { stampSchema } from "./stamp";
import { playsigSchema } from "./playsig";
import type { Playsig } from "./playsig";

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
