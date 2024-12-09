import type { DateTime } from "./date-time.js";
import type { PublicKey } from "./public-key.js";
import type { Signature } from "./signature.js";

export interface SignedMessage {
	publicKey: PublicKey;
	issuedAt: DateTime;
	expiresAt: DateTime;
	signature: Signature;
}
