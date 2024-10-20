import type { DateTime } from "./date-time";
import type { PublicKey } from "./public-key";
import type { Signature } from "./signature";

export interface SignedMessage {
	publicKey: PublicKey;
	issuedAt: DateTime;
	expiresAt: DateTime;
	signature: Signature;
}
