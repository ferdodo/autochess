import type { DateTime } from "./DateTime.js";
import type { Playsig } from "./Playsig.js";
import type { PublicKey } from "./PublicKey.js";
import type { Signature } from "./Signature.js";
import type { Stamp } from "./Stamp.js";

export interface ShopBuyRequest {
	item: number;
	publicKey: PublicKey;
	playsig: Playsig;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
	stamp: Stamp;
}
