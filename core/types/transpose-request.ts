import type { PublicKey } from "./public-key";
import { publicKeySchema } from "./public-key";
import type { Signature } from "./signature";
import { signatureSchema } from "./signature";
import type { PieceSlot } from "./piece-slot";
import { pieceSlotSchema } from "./piece-slot";
import { dateTimeSchema, type DateTime } from "./date-time";
import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";
import { stampSchema } from "./stamp";
import type { Stamp } from "./stamp";
import { playsigSchema } from "./playsig";
import type { Playsig } from "./playsig";

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
