import type { PublicKey } from "./PublicKey.js";
import type { Stamp } from "./Stamp.js";
import type { Playsig } from "./Playsig.js";

export interface GameScoped {
	publicKey: PublicKey;
	playsig: Playsig;
	stamp: Stamp;
}
