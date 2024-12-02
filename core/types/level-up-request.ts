import type { PublicKey } from "./public-key";
import { publicKeySchema } from "./public-key";
import type { Signature } from "./signature";
import { signatureSchema } from "./signature";
import { dateTimeSchema } from "./date-time";
import type { DateTime } from "./date-time";
import type { FromSchema } from "json-schema-to-ts";
import type { Stamp } from "./stamp";
import type { JsonSchemaRecommended } from "json-schema-policies";
import { stampSchema } from "./stamp";
import { playsigSchema } from "./playsig";
import type { Playsig } from "./playsig";

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
