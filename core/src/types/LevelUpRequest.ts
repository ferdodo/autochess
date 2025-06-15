import type { PublicKey } from "./PublicKey.js";
import type { Signature } from "./Signature.js";
import type { DateTime } from "./DateTime.js";
import type { Stamp } from "./Stamp.js";
import type { Playsig } from "./Playsig.js";

export interface LevelUpRequest {
	publicKey: PublicKey;
	playsig: Playsig;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
	stamp: Stamp;
}
