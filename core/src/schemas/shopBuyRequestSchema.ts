import { createRecommendedSchema } from "json-schema-policies";
import { publicKeySchema } from "./publicKeySchema.js";
import { signatureSchema } from "./signatureSchema.js";
import { dateTimeSchema } from "./dateTimeSchema.js";
import { stampSchema } from "./stampSchema.js";
import { playsigSchema } from "./playsigSchema.js";

export const shopBuyRequestSchema = createRecommendedSchema({
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
} as const);
