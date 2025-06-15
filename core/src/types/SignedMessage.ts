import type { DateTime } from "./DateTime.js";
import type { PublicKey } from "./PublicKey.js";
import type { Signature } from "./Signature.js";

export interface SignedMessage {
	publicKey: PublicKey;
	issuedAt: DateTime;
	expiresAt: DateTime;
	signature: Signature;
}
