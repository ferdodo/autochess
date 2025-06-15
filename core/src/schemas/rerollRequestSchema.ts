import { createRecommendedSchema } from "json-schema-policies";
import { publicKeySchema } from "./publicKeySchema.js";
import { playsigSchema } from "./playsigSchema.js";
import { signatureSchema } from "./signatureSchema.js";
import { dateTimeSchema } from "./dateTimeSchema.js";
import { stampSchema } from "./stampSchema.js";

export const rerollRequestSchema = createRecommendedSchema({
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
} as const);
