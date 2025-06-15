import { createRecommendedSchema } from "json-schema-policies";
import { signatureSchema } from "./signatureSchema.js";
import { dateTimeSchema } from "./dateTimeSchema.js";
import { publicKeySchema } from "./publicKeySchema.js";
import { playsigSchema } from "./playsigSchema.js";

export const stampSchema = createRecommendedSchema({
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
} as const);
