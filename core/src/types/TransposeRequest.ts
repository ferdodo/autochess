import type { DateTime } from "./DateTime.js";
import type { PieceSlot } from "./PieceSlot.js";
import type { Playsig } from "./Playsig.js";
import type { PublicKey } from "./PublicKey.js";
import type { Signature } from "./Signature.js";
import type { Stamp } from "./Stamp.js";

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
