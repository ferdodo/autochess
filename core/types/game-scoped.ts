import type { PublicKey } from "./public-key.js";
import type { Stamp } from "./stamp.js";
import type { Playsig } from "./playsig.js";

export interface GameScoped {
	publicKey: PublicKey;
	playsig: Playsig;
	stamp: Stamp;
}
