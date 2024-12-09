import type { PublicKey } from "./public-key.js";
import { publicKeySchema } from "./public-key.js";
import type { Signature } from "./signature.js";
import { signatureSchema } from "./signature.js";
import type { PieceSlot } from "./piece-slot.js";
import { pieceSlotSchema } from "./piece-slot.js";
import { dateTimeSchema, type DateTime } from "./date-time.js";
import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";
import { stampSchema } from "./stamp.js";
import type { Stamp } from "./stamp.js";
import { playsigSchema } from "./playsig.js";
import type { Playsig } from "./playsig.js";

export interface TransposeRequest {
	publicKey: PublicKey;
	playsig: Playsig;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
	grabPiece: PieceSlot;
	ungrabPiece: PieceSlot;
	stamp: Stamp;
}

export const transposeRequestSchema = {
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
} as const;

const a: TransposeRequest = {} as FromSchema<typeof transposeRequestSchema>;
const b: FromSchema<typeof transposeRequestSchema> = {} as TransposeRequest;
const c: JsonSchemaRecommended = transposeRequestSchema;
