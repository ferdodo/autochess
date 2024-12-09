import { signatureSchema, type Signature } from "./signature.js";
import { dateTimeSchema, type DateTime } from "./date-time.js";
import { publicKeySchema, type PublicKey } from "./public-key.js";
import type { FromSchema } from "json-schema-to-ts";
import { playsigSchema, type Playsig } from "./playsig.js";
import type { JsonSchemaRecommended } from "json-schema-policies";

export interface Stamp {
	playsig: Playsig;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
	publicKey: PublicKey;
	playerPublicKey: PublicKey;
}

export const stampSchema = {
	type: "object",
	title: "Stamp",
	description: "Proof that user belongs to a game",
	properties: {
		signature: signatureSchema,
		issuedAt: dateTimeSchema,
		expiresAt: dateTimeSchema,
		publicKey: publicKeySchema,
		playsig: playsigSchema,
		playerPublicKey: publicKeySchema,
	},
	required: [
		"signature",
		"issuedAt",
		"expiresAt",
		"publicKey",
		"playsig",
		"playerPublicKey",
	],
	additionalProperties: false,
} as const;

const a: Stamp = {} as FromSchema<typeof stampSchema>;
const b: FromSchema<typeof stampSchema> = {} as Stamp;
const c: JsonSchemaRecommended = stampSchema;
