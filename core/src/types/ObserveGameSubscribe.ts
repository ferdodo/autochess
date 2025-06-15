import type { DateTime } from "./DateTime.js";
import type { Playsig } from "./Playsig.js";
import type { PublicKey } from "./PublicKey.js";
import type { Signature } from "./Signature.js";

export interface ObserveGameSubscribe {
	playsig: Playsig;
	publicKey: PublicKey;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
}
