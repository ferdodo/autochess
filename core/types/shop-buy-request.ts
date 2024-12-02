import type { PublicKey } from "./public-key";
import { publicKeySchema } from "./public-key";
import type { Signature } from "./signature";
import { signatureSchema } from "./signature";
import { dateTimeSchema } from "./date-time";
import type { DateTime } from "./date-time";
import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";
import { stampSchema } from "./stamp";
import type { Stamp } from "./stamp";
import { playsigSchema } from "./playsig";
import type { Playsig } from "./playsig";

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
