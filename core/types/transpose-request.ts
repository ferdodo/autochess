import type { PublicKey } from "./public-key";
import { publicKeySchema } from "./public-key";
import type { Signature } from "./signature";
import { signatureSchema } from "./signature";
import { timestampSchema } from "./timestamp";
import type { Timestamp } from "./timestamp";
import { playsigSchema } from "./playsig";
import type { Playsig } from "./playsig";
import type { PieceSlot } from "./piece-slot";
import { pieceSlotSchema } from "./piece-slot";

export interface TransposeRequest {
	publicKey: PublicKey;
	playsig: Playsig;
	signature: Signature;
	timestamp: Timestamp;
	grabPiece: PieceSlot;
	ungrabPiece: PieceSlot;
}

export const transposeRequestSchema = {
	type: "object",
	required: [
		"publicKey",
		"playsig",
		"signature",
		"timestamp",
		"grabPiece",
		"ungrabPiece",
	],
	properties: {
		publicKey: publicKeySchema,
		playsig: playsigSchema,
		signature: signatureSchema,
		timestamp: timestampSchema,
		grabPiece: pieceSlotSchema,
		ungrabPiece: pieceSlotSchema,
	},
	additionalProperties: false,
} as const;
