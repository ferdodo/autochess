import { createRecommendedSchema } from "json-schema-policies";
import { nicknameSchema } from "./nicknameSchema.js";
import { publicKeySchema } from "./publicKeySchema.js";
import { signatureSchema } from "./signatureSchema.js";
import { dateTimeSchema } from "./dateTimeSchema.js";

export const initiateGameRequestSchema = createRecommendedSchema({
	type: "object",
	title: "Initiate game request",
	description: "Payload to initiate a new game.",
	required: ["nickname", "publicKey", "signature", "issuedAt", "expiresAt"],
	properties: {
		nickname: nicknameSchema,
		publicKey: publicKeySchema,
		signature: signatureSchema,
		issuedAt: dateTimeSchema,
		expiresAt: dateTimeSchema,
	},
	additionalProperties: false,
} as const);
