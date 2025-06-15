import type { Signature } from "./Signature.js";
import type { DateTime } from "./DateTime.js";
import type { PublicKey } from "./PublicKey.js";
import type { Playsig } from "./Playsig.js";

export interface Stamp {
	playsig: Playsig;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
	publicKey: PublicKey;
	playerPublicKey: PublicKey;
}
