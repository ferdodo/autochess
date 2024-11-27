import type { PublicKey } from "./public-key";
import { publicKeySchema } from "./public-key";
import type { Signature } from "./signature";
import { signatureSchema } from "./signature";
import type { PieceSlot } from "./piece-slot";
import { pieceSlotSchema } from "./piece-slot";
import { dateTimeSchema, type DateTime } from "./date-time";
import type { FromSchema } from "json-schema-to-ts";
import { cachedGameSchema } from "./cached-game";
import type { CachedGame } from "./cached-game";
import type { JsonSchemaRecommended } from "json-schema-policies";

export interface TransposeRequest {
	publicKey: PublicKey;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
	grabPiece: PieceSlot;
	ungrabPiece: PieceSlot;
	cachedGame: CachedGame;
}

export const transposeRequestSchema = {
	type: "object",
	title: "Transpose Request",
	description:
		"Payload to request transposing a piece " + "on the board or the bench.",
	required: [
		"publicKey",
		"signature",
		"issuedAt",
		"expiresAt",
		"grabPiece",
		"ungrabPiece",
		"cachedGame",
	],
	properties: {
		publicKey: publicKeySchema,
		signature: signatureSchema,
		expiresAt: dateTimeSchema,
		issuedAt: dateTimeSchema,
		grabPiece: pieceSlotSchema,
		ungrabPiece: pieceSlotSchema,
		cachedGame: cachedGameSchema,
	},
	additionalProperties: false,
} as const;

const a: TransposeRequest = {} as FromSchema<typeof transposeRequestSchema>;
const b: FromSchema<typeof transposeRequestSchema> = {} as TransposeRequest;
const c: JsonSchemaRecommended = transposeRequestSchema;
