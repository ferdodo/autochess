import { createRecommendedSchema } from "json-schema-policies";
import { publicKeySchema } from "./publicKeySchema.js";
import { playsigSchema } from "./playsigSchema.js";
import { signatureSchema } from "./signatureSchema.js";
import { dateTimeSchema } from "./dateTimeSchema.js";
import { stampSchema } from "./stampSchema.js";

export const LevelUpRequestSchema = createRecommendedSchema({
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
} as const);
