import type { PublicKey } from "./public-key";
import { publicKeySchema } from "./public-key";
import type { Signature } from "./signature";
import { signatureSchema } from "./signature";
import { playsigSchema } from "./playsig";
import type { Playsig } from "./playsig";
import type { PieceSlot } from "./piece-slot";
import { pieceSlotSchema } from "./piece-slot";
import { dateTimeSchema, type DateTime } from "./date-time";

export interface TransposeRequest {
	publicKey: PublicKey;
	playsig: Playsig;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
	grabPiece: PieceSlot;
	ungrabPiece: PieceSlot;
}

export const transposeRequestSchema = {
	type: "object",
	required: [
		"publicKey",
		"playsig",
		"signature",
		"issuedAt",
		"expiresAt",
		"grabPiece",
		"ungrabPiece",
	],
	properties: {
		publicKey: publicKeySchema,
		playsig: playsigSchema,
		signature: signatureSchema,
		expiresAt: dateTimeSchema,
		issuedAt: dateTimeSchema,
		grabPiece: pieceSlotSchema,
		ungrabPiece: pieceSlotSchema,
	},
	additionalProperties: false,
} as const;
