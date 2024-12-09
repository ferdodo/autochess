import type { PublicKey } from "./public-key.js";
import { publicKeySchema } from "./public-key.js";
import type { Signature } from "./signature.js";
import { signatureSchema } from "./signature.js";
import { dateTimeSchema } from "./date-time.js";
import type { DateTime } from "./date-time.js";
import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";
import { stampSchema } from "./stamp.js";
import type { Stamp } from "./stamp.js";
import { playsigSchema } from "./playsig.js";
import type { Playsig } from "./playsig.js";

export interface ShopBuyRequest {
	item: number;
	publicKey: PublicKey;
	playsig: Playsig;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
	stamp: Stamp;
}

export const shopBuyRequestSchema = {
	type: "object",
	title: "Shop buy request",
	description: "Payload to buy a hero from the shop.",
	required: [
		"item",
		"publicKey",
		"signature",
		"issuedAt",
		"expiresAt",
		"stamp",
		"playsig",
	],
	properties: {
		item: {
			type: "integer",
			title: "Item",
			description: "Index of the item to buy in the shop.",
			minimum: 0,
			maximum: 2,
		},
		publicKey: publicKeySchema,
		signature: signatureSchema,
		issuedAt: dateTimeSchema,
		expiresAt: dateTimeSchema,
		stamp: stampSchema,
		playsig: playsigSchema,
	},
	additionalProperties: false,
} as const;

const a: ShopBuyRequest = {} as FromSchema<typeof shopBuyRequestSchema>;
const b: FromSchema<typeof shopBuyRequestSchema> = {} as ShopBuyRequest;
const c: JsonSchemaRecommended = shopBuyRequestSchema;
