import { createRecommendedSchema } from "json-schema-policies";
import { publicKeySchema } from "./publicKeySchema.js";
import { playsigSchema } from "./playsigSchema.js";
import { signatureSchema } from "./signatureSchema.js";
import { dateTimeSchema } from "./dateTimeSchema.js";
import { pieceSlotSchema } from "./pieceSlotSchema.js";
import { stampSchema } from "./stampSchema.js";

export const transposeRequestSchema = createRecommendedSchema({
	type: "object",
	title: "Transpose Request",
	description:
		"Payload to request transposing a piece on the board or the bench.",
	required: [
		"publicKey",
		"playsig",
		"signature",
		"issuedAt",
		"expiresAt",
		"grabPiece",
		"ungrabPiece",
		"stamp",
	],
	properties: {
		publicKey: publicKeySchema,
		playsig: playsigSchema,
		signature: signatureSchema,
		expiresAt: dateTimeSchema,
		issuedAt: dateTimeSchema,
		grabPiece: pieceSlotSchema,
		ungrabPiece: pieceSlotSchema,
		stamp: stampSchema,
	},
	additionalProperties: false,
} as const);
