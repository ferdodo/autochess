import type { PublicKey } from "./public-key";
import type { Stamp } from "./stamp";
import type { Playsig } from "./playsig";

export interface GameScoped {
	publicKey: PublicKey;
	playsig: Playsig;
	stamp: Stamp;
}
